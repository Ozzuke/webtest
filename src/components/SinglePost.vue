<template>
  <div class="single-post">
    <h2>{{ post.title }}</h2>
    <p>{{ post.content }}</p>
    <div class="post-details">
      <span>Author: {{ post.author }}</span>
      <span>Date: {{ post.date }}</span>
    </div>
    <div class="post-actions">
      <button @click="updatePost">Update</button>
      <button @click="confirmDeletePost">Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SinglePost",
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  methods: {
    updatePost() {
      // Implement update functionality here
      console.log('Update post:', this.post.id);
    },
    confirmDeletePost() {
      if (confirm("Are you sure you want to delete this post? This action cannot be undone.")) {
        this.deletePost();
      }
    },
    deletePost() {
      // Implement delete functionality here
      console.log('Delete post:', this.post.id);
    }
  }
}
</script>

<style scoped>
.single-post {
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin: 20px 0;
}

.single-post h2 {
  margin-bottom: 10px;
}

.post-details {
  margin-top: 20px;
  font-size: 0.9em;
  color: #666;
}

.post-details span {
  display: block;
  margin-bottom: 5px;
}

.post-actions {
  margin-top: 20px;
}

.post-actions button {
  margin-right: 10px;
  padding: 10px 20px;
  background-color: #343a8f;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.post-actions button:hover {
  background-color: #45a049;
}
</style>
