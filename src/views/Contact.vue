<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
    <div class="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
      <h2 class="text-3xl font-bold text-gray-800 text-center mb-6">📩 Get in Touch</h2>

      <form @submit.prevent="submitForm" class="space-y-4">
        <input v-model="name" type="text" placeholder="Your Name"
          class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition duration-300" required />

        <input v-model="email" type="email" placeholder="Your Email"
          class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition duration-300" required />

        <textarea v-model="message" placeholder="Your Message"
          class="w-full p-3 border border-gray-300 rounded-lg h-32 focus:ring-2 focus:ring-blue-500 transition duration-300" required></textarea>

        <button type="submit" :disabled="loading"
          class="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-lg transition duration-300 flex items-center justify-center">
          <span v-if="!loading">Send Message</span>
          <span v-if="loading" class="animate-spin border-t-2 border-white rounded-full w-5 h-5 ml-2"></span>
        </button>
      </form>

      <p v-if="responseMessage" class="text-center text-green-600 mt-4 font-semibold">{{ responseMessage }}</p>
      <p v-if="errorMessage" class="text-center text-red-600 mt-4 font-semibold">{{ errorMessage }}</p>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const name = ref("");
    const email = ref("");
    const message = ref("");
    const responseMessage = ref("");
    const errorMessage = ref("");
    const loading = ref(false); // ✅ Added loading state

    const submitForm = async () => {
      responseMessage.value = "";
      errorMessage.value = "";
      loading.value = true; // ✅ Show loading indicator

      try {
        const response = await fetch("http://127.0.0.1:5000/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: name.value,
            email: email.value,
            message: message.value,
          }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        responseMessage.value = data.message;
        errorMessage.value = "";
        name.value = "";
        email.value = "";
        message.value = "";

      } catch (error) {
        console.error("❌ Error sending message:", error);
        errorMessage.value = "❌ Failed to send message. Please try again.";
      } finally {
        loading.value = false; // ✅ Hide loading indicator
      }
    };

    return { name, email, message, responseMessage, errorMessage, loading, submitForm };
  },
};
</script>
