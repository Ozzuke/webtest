import add-posts-containerd from "@/components/add-posts-container.vue";
<script>
import AddPostsContainer from "@/components/addPostsContainer.vue";

export default {
  name: "AddPost",
  components: {AddPostsContainer}
}
</script>

<template>
  <main>
    <div id="addPost-layout">
      <AddPostsContainer/>
    </div>
  </main>

</template>

<style scoped>

main{
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}

</style>
