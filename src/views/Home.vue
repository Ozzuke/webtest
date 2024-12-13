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
        <span id="page-end-text">
          &lt; No more posts to show,
          <RouterLink to="/add-post">
            create a post yourself!
          </RouterLink>
          &gt;
        </span>
        <button @click="resetLikes" id="reset-likes">
          Reset Reactions
        </button>
        <button @click="logout" id="logout-button">
          Logout
        </button>
        <button @click="navigateToAddPost" id="add-post-button">
          Add Post
        </button>
        <button @click="deleteAllPosts" id="delete-all-button">
          Delete All
        </button>
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
    ...mapActions(['fetchPosts', "resetLikes"]),
    loadPosts() {
      try {
        this.fetchPosts()
        this.loading = false
      } catch (e) {
        this.isError = true
        this.error = e
        console.error('Error loading posts:', e)
      }
    },
    logout() {
      localStorage.removeItem('token');
      this.$router.push('/login');
    },
    navigateToAddPost() {
      this.$router.push('/add-post');
    },
    deleteAllPosts() {
      // Implement delete all posts functionality
    }
  },
  created() {
    this.loadPosts()
  }
}
</script>

<style scoped>
main {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

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
  min-width: 150px;
  display: flex;
  flex-direction: column;
  height: auto;
  width: 15vw;
  margin: 0;
  padding: 30px 20px;
  background-color: lightgray;
}

#posts-container + div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px;
}

#posts-container + div span {
  color: #666;
  font-style: italic;
}

#reset-likes, #logout-button, #add-post-button, #delete-all-button {
  margin-top: 20px;
  padding: 10px;
  background-color: #f00;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
