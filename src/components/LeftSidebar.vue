<script>
export default {
  name: "LeftSidebar"
}
</script>

<template>
  <aside class="left-sidebar">
    <h2>Current issues</h2>
    <ul>
      <li>Many files contain redundant / unused legacy code</li>
    </ul>
  </aside>
</template>

<style scoped>
aside {
  border-right: #666 solid 1px;
  text-align: end;
}

h2 {
  color: #c00;
  margin-bottom: 0;
}

ul {
  list-style-type: none;
  margin: 0;
}

li {
  margin: 10px 0 10px 10px;
  padding: 10px;
  background-color: #f0dddd;
  border-radius: 8px;
  border: #c44 solid 1px;
  text-align: left;
}
</style>
