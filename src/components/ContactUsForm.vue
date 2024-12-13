<template>
  <form @submit.prevent="handleSubmit">
    <div>
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="name" required>
    </div>
    <div>
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="email" required>
    </div>
    <div>
      <label for="message">Message:</label>
      <textarea id="message" v-model="message" required></textarea>
    </div>
    <button type="submit">Submit</button>
  </form>
</template>

<script>
import sanitize from 'sanitize-html';

export default {
  name: 'ContactUsForm',
  data() {
    return {
      name: '',
      email: '',
      message: ''
    }
  },
  methods: {
    handleSubmit() {
      // Sanitize user inputs
      const sanitizedName = sanitize(this.name);
      const sanitizedEmail = sanitize(this.email);
      const sanitizedMessage = sanitize(this.message);

      // Handle form submission logic here
      console.log('Form submitted:', sanitizedName, sanitizedEmail, sanitizedMessage);
    }
  }
}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 0 auto;
}

div {
  margin-bottom: 15px;
}

label {
  margin-bottom: 5px;
  font-weight: bold;
}

input, textarea {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}

button {
  padding: 10px;
  background-color: #343a8f;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
</style>
