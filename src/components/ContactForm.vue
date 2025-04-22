<template>
  <form @submit.prevent="validateForm">
    <input v-model="email" type="email" placeholder="Your Email" data-test="email" />
    <span v-if="showEmailError" class="error" data-test="email-error">{{ emailError }}</span>

    <textarea v-model="message" placeholder="Your Message" data-test="message"></textarea>
    <span v-if="showMessageError" class="error" data-test="message-error">{{ messageError }}</span>

    <button type="submit" :disabled="isSubmitting" data-test="submit-button">Send Message</button>

    <p v-if="successMessage" class="success" data-test="success-message">{{ successMessage }}</p>
  </form>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      message: "",
      emailError: "",
      messageError: "",
      successMessage: "",
      isSubmitting: false, // Tracks submission state
    };
  },
  computed: {
    showEmailError() {
      return this.emailError !== "";
    },
    showMessageError() {
      return this.messageError !== "";
    },
  },
  methods: {
    async validateForm() {
      this.emailError = this.email.trim() ? "" : "Email is required";
      this.messageError = this.message.trim() ? "" : "Message cannot be empty";

      this.successMessage = ""; // Reset success message

      await this.$nextTick(); // Ensure Vue updates

      if (!this.emailError && !this.messageError) {
        await this.sendMessage(); // Calls the `sendMessage()` method
      }
    },
    async sendMessage() {
      this.isSubmitting = true;
      console.log("Is Submitting:", this.isSubmitting); // Expect true
      await new Promise((resolve) => setTimeout(resolve, 500));
      this.successMessage = "Your message has been sent!";
      console.log("Success Message:", this.successMessage); // Expect "Your message has been sent!"
      this.isSubmitting = false;
      console.log("Is Submitting:", this.isSubmitting); // Expect false
      await this.$nextTick(); // Ensure DOM updates
    },
  },
};
</script>
