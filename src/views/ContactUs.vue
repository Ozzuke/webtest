<template>
  <div class="contact-us">
    <h1>Contact Us</h1>
    <ContactUsForm />
  </div>
</template>

<script>
import ContactUsForm from '@/components/ContactUsForm.vue';

export default {
  name: 'ContactUs',
  components: {
    ContactUsForm
  }
}
</script>

<style scoped>
.contact-us {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

h1 {
  margin-bottom: 20px;
}
</style>
