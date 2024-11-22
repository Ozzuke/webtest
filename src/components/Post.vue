<script>
import {mapActions} from "vuex";

export default {
  name: "Post",
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  computed: {
    userIconSrc() {
      return require(`@/assets/${this.post.userIcon}`)
    },
    contentImages() {
      return this.post.content.images.map(image => require(`@/assets/${image}`))
    }
  },
  methods: {
    ...mapActions(['updateReaction']),
    handleReaction(reaction) {
      this.updateReaction({ postId: this.post.id, reaction })
    },
    formatDate(date) {
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      })
    }
  }
}
</script>

<template>
  <article class="post">
    <div class="post-header">
      <img :src="userIconSrc" alt="User icon" class="user-icon">
      <span class="post-author">{{ post.author }}</span>
      <span class="post-date">
        <time>{{ post.time }}</time>
        {{ formatDate(new Date(post.date)) }} </span>
    </div>

    <div class="post-content">
      <p v-html="post.content.text"></p>
      <div v-if="post.content.images" class="post-images">
        <img
            v-for="(image, index) in post.content.images"
            :key="index"
            :src="contentImages[index]"
            alt="Post image"
        >
      </div>
    </div>

    <div class="post-footer">
      <div class="post-reactions">
        <div v-for="(count, reaction) in post.reactions" :key="reaction" class="reaction">
          <button @click="handleReaction(reaction)">
            <img :src="require(`@/assets/images/${reaction}.svg`)" :alt="`${reaction} button`">
          </button>
          <span class="reaction-count">{{ count }}</span>
        </div>
      </div>
    </div>
  </article>
</template>

<style scoped>
article {
  background-color: #ddd;
  border-radius: 5px;
  padding: 10px;
  margin: 20px 30px 10px 30px;
  width: 100%;
  max-width: 500px;
  min-width: 250px;
}

.post-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 0;
}

.post-header img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  -webkit-user-drag: none;
}

.post-header img + span {
  margin-left: 10px;
  margin-right: auto;
  font-size: 1.1em;
  font-family: Futura, sans-serif;
}

.post-header span {
  font-family: monospace;
  font-size: 1.2em;
}

.post-header time {
  font-family: monospace;
  font-size: 0.8em;
  color: #666;
}

.post-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 10px 0;
}

.post-content img {
  width: auto;
  height: auto;
  max-width: 100%;
  min-width: 60%;
  margin-left: auto;
  margin-right: auto;
}

.post-content img ~ img {
  margin-top: 10px;
}

.post-footer {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}

.post-reactions {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 0;
  padding: 0;
}

.reaction {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 0;
  padding: 0 10px 0 0;
}

.reaction button {
  width: auto;
  height: 32px;
  padding: 0 0;
  background-color: transparent;
  border: none;
  margin: 0 3px 0 0;
  cursor: pointer;
}

.reaction:last-of-type button {
  margin-right: 4px;
}

.reaction-count {
  color: #444;
  font-size: 1.2em;

}

button > img {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  -webkit-user-drag: none;
}

.post-footer button:hover img {
  position: relative;
  bottom: 3px;
}

.post-footer button:active img {
  bottom: 5px;
}

main > div:last-of-type {
  color: #666;
}
</style>
