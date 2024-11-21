<script>
export default {
  name: "addPostsContainer"
}
</script>

<template>
  <div id="addPost-layout">
    <form class="addPost-form">
      <div>
        <label for="post-text" id="post-text-label">Post body:</label>
        <textarea id="post-text" name="post-text" rows="6" cols="20" placeholder="textarea"></textarea>
      </div>
      <div class="file-selector-div">
        <p id="image-label-label">Select file:</p>
        <label for="post-image" id="image-label">Choose File</label>
        <input type="file" id="post-image" name="post-image" accept="image/*" class="hidden">
      </div>
      <div class="submit-button-div">
        <button type="submit" class="submit-button"><a href="index.html">Create post</a></button>
      </div>
    </form>
  </div>
</template>

<style scoped>
main {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}

#addPost-layout {
  display: flex;
  justify-content: center;
  align-content: center;
  font-weight: bold;
}

form {
  padding: 1vw;
  background-color: #f0f0f0;
  border-radius: 1em;
  flex-grow: 1;
  width: 28vw;
}

.addPost-form div {
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 1vw;
}

.submit-button-div {
  display: flex;
  justify-content: center;
}

textarea {
  padding: 1vw;
  border-radius: 4px;
  border-style: none;
  width: 100%;
  height: 20vh;
}

.submit-button {
  background-color: #343a8f;
  color: white;
  border-style: none;
  height: 2em;
  padding: 0.5vw 1vw;
  border-radius: 4px;
  font-size: 1em;
}

.submit-button > a {
  color: white;
  font-size: 1em;
  text-decoration: none;
}

.submit-button:hover {
  background-color: #45a049;
}

.hidden {
  display: none;
}

.file-selector-div {
  display: flex;
  align-items: center;
}

#image-label {
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: normal;
  background-color: #444444;
  color: #f0f0f0;
  height: 2em;
  padding: 0 1vw;
  margin: 0;
  border-style: none;
  border-radius: 4px;
}

#image-label-label {
  padding-right: 0;
  margin-right: 1vw;
}

#post-text-label {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1vw;
}

#image-label:hover {
  background-color: #666666;
  color: #f0f0f0;
}
</style>