<template>
  <div class="home-layout">
    <LeftSidebar/>

    <main v-if="loading">
      <p>Loading...</p>
    </main>

    <main v-else-if="isError">
      <p>Error fetching posts: {{ error }}</p>
    </main>

    <main v-else>
      <div v-if="posts.length" id="posts-container">
        <Post
            v-for="post in posts"
            :key="post.id"
            :post="post"
        />
      </div>
      <div>
        <p id="page-end-text">&lt; No more posts to show,
          <RouterLink to="/add-post">
            create a post
          </RouterLink>
          or
          <RouterLink to="/">
            go to the top
          </RouterLink> &gt;
        </p>
      </div>
    </main>

    <RightSidebar/>
  </div>
</template>

<script>
import LeftSidebar from "@/components/LeftSidebar.vue";
import RightSidebar from "@/components/RightSidebar.vue";
import Post from "@/components/Post.vue";
import {mapActions, mapState} from "vuex";

export default {
  name: "Home",
  components: {
    RightSidebar,
    LeftSidebar,
    Post
  },
  data() {
    return {
      loading: true,
      isError: false,
      error: null
    }
  },
  computed: {
    ...mapState({
      posts: state => state.posts
    })
  },
  methods: {
    ...mapActions(['fetchPosts']),
    loadPosts() {
      try {
        this.fetchPosts()
        this.loading = false
      } catch (e) {
        this.isError = true
        this.error = e
        console.error('Error loading posts:', e)
      }
    }
  },
  created() {
    this.loadPosts()
  }
}
</script>

<style scoped>
.home-layout {
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
    align-items: stretch;
    flex-wrap: wrap;
    padding: 0;
}

aside {
    max-width: 300px;
    min-width: 200px;
    display: flex;
    flex-direction: column;
    height: auto;
    width: 15vw;
    margin: 0;
    padding: 30px 20px;
    background-color: lightgray;
}
</style>
