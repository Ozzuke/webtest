<template>
  <div class="login-container">
    <h2>Login</h2>
    <h3 class="highlight">Welcome Back</h3>
    <div class="input-group">
      <label for="username">Username</label>
      <input id="username" type="text" placeholder="Enter username"/>
    </div>
    <div class="input-group">
      <label for="password">Password</label>
      <input id="password" type="password" placeholder="Enter password"/>
    </div>
    <router-link to="/" class="align-center"><button class="btn-login">Login</button></router-link>
    <p class="Forget-password">Forgot your password?</p>
    <router-link to="/signup" class="signup">Sign up instead</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.login-container {
  display: flex;
  flex-direction: column;
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

.align-center {
  align-self: center;
}

.btn-login {
  padding: 10px;
  background-color: #343a8f;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  align-self: center;
  min-width: 100px;
}

.btn-login:hover {
  background-color: #45a049;
}

.Forget-password {
  text-align: center;
  margin-top: 10px;
  color: #11cfbc;
  cursor: pointer;
}

.Forget-password:hover {
  text-decoration: underline;
  color: #0d9e9e;
}

.signup {
  text-align: center;
  margin-top: 0;
  color: #0a7c71;
  cursor: pointer;
  text-decoration: none;
}

.signup:hover {
  text-decoration: underline;
  color: #0d9e9e;
}
</style>
