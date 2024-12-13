<template>
  <div>
    <SinglePost :post="post" />
  </div>
</template>

<script>
import SinglePost from "@/components/SinglePost.vue";
import { mapState } from "vuex";

export default {
  name: "SinglePostView",
  components: {
    SinglePost,
  },
  computed: {
    ...mapState({
      posts: (state) => state.posts,
    }),
    post() {
      const postId = this.$route.params.id;
      return this.posts.find((post) => post.id === parseInt(postId));
    },
  },
};
</script>

<style scoped>
/* Add any necessary styles here */
</style>
