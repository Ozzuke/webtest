document.addEventListener('DOMContentLoaded', () => {
    // load posts from json file
    fetch('res/data/posts.json')
        .then(response => response.json())
        .then(data => {
            const posts = data.posts;

            const postContainer = document.getElementById('posts-container');
            // add posts in reverse order to show the latest post first
            posts.reverse().forEach(post => {
                const postElement = createPost(post);
                postContainer.appendChild(postElement);
            });
        });
});

const createPost = (post) => {
    const container = document.createElement('article');
    container.innerHTML = `
        <div class="post-header">
            <img src="${post.userIcon}" alt="User icon">
            <span class="post-author">${post.author}</span>
            <span class="post-date"><time class="post-time">${post.time}</time> ${formatDate(new Date(post.date))}</span>
        </div>
        <div class="post-content">
            <p class="post-text">${post.content.text}</p>
            ${post.content.images ? post.content.images.map(image => '<img src="' + image + '" alt="Post image">').join('') : ''}
        </div>
        <div class="post-footer">
            ${post.reactions ? createReactions(post.reactions) : ''}
        </div>
    `;

    return container;
}

const formatDate = (date) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

const createReactions = (reactions) => {
    const reactionContainer = document.createElement('div');
    reactionContainer.classList.add('reactions');

    for (const reaction in reactions) {
        const reactionElement = createReaction(reaction, reactions[reaction]);
        reactionContainer.innerHTML += reactionElement;
    }

    return reactionContainer.outerHTML;
}

const createReaction = (reaction, count) => {
    return `
        <div class="reaction-group" reaction="${reaction}">
            <button class="reaction-button">
                <img src="res/images/${reaction}.svg" alt="${reaction} icon">
            </button>
            <div class="reaction-count">${count}</div>
        </div>
    `;
}
