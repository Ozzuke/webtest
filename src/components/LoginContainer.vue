<template>
    <div class="login-wrapper">
      <div class="login-container">
        <h2>Login</h2>
        <h3 class="highlight">Welcome Back</h3>
        <div class="input-group">
          <label for="username">Username</label>
          <input id="username" type="text" placeholder="Enter username" />
        </div>
        <div class="input-group">
          <label for="password">Password</label>
          <input id="password" type="password" placeholder="Enter password" />
        </div>
        <button class="btn-login">Login</button>
        <p class="Forget-password">Forgot your password?</p>
      </div>
    </div>
  </template>

<script>
export default {};
</script>

<style scoped>
.login-wrapper {
  display: flex;
  justify-content: center; 
  align-items: center;     
  height: 100vh;     
  background-color: #e5e5e5; 
  margin: 0;
}
.login-container {
    background-color: #f0f0f0;
    padding: 20px;
    border-radius: 8px;
    width: 300px;
    max-width: 90%;
    margin: 5vw 0;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
  margin-bottom: 10px;
}

.highlight {
  color: #11cfbc;
}

h3 {
  text-align: center;
  margin-bottom: 10px;
}

.input-group {
  margin-bottom: 15px;
  text-align: center;
}

.input-group input {
  width: calc(100% - 20px);
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

.input-group input::placeholder {
  color: #999;
  opacity: 1;
}

.btn-login {
  width: 100%;
  padding: 10px;
  background-color: #343a8f;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn-login:hover {
  background-color: #45a049;
}

.Forget-password {
  text-align: center;
  margin-top: 10px;
  color: #11cfbc;
}
</style>
