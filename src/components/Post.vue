<script>
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
  }
}
</script>

<template>
  <div class="post">
    <div class="post-header">
      <img :src="userIconSrc" alt="User icon" class="user-icon">
      <div class="post-info">
        <h3>{{ post.author }}</h3>
        <p class="post-date">{{ post.date }} {{ post.time }}</p>
      </div>
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

    <div class="post-reactions">
      <div class="reaction">
        <span>👍 {{ post.reactions.like }}</span>
      </div>
      <div class="reaction">
        <span>👎 {{ post.reactions.dislike }}</span>
      </div>
      <div class="reaction">
        <span>😄 {{ post.reactions.haha }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
