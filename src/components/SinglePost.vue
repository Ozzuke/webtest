<template>
  <div class="single-post">
    <h2>{{ post.title }}</h2>
    <p>{{ post.content }}</p>
    <div class="post-details">
      <span>Author: {{ post.author }}</span>
      <span>Date: {{ post.date }}</span>
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
</style>
