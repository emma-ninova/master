<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
    <div class="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
      <h2 class="text-2xl font-bold text-gray-800 text-center mb-6">Contact Me</h2>

      <form @submit.prevent="submitForm" class="space-y-4">
        <input v-model="name" type="text" placeholder="Your Name"
          class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" required />
        <p v-if="errors.name" class="text-red-500 text-sm">{{ errors.name }}</p>

        <input v-model="email" type="email" placeholder="Your Email"
          class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" required />
        <p v-if="errors.email" class="text-red-500 text-sm">{{ errors.email }}</p>

        <textarea v-model="message" placeholder="Your Message"
          class="w-full p-3 border border-gray-300 rounded-lg h-32 focus:ring-2 focus:ring-blue-500" required></textarea>
        <p v-if="errors.message" class="text-red-500 text-sm">{{ errors.message }}</p>

        <button type="submit"
          class="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-lg transition duration-300">
          Send Message
        </button>
      </form>

      <p v-if="responseMessage" class="text-center text-green-600 mt-4">{{ responseMessage }}</p>
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
    const errors = ref({});

    const validateForm = () => {
      errors.value = {}; // Reset errors

      if (!name.value.trim()) errors.value.name = "Name is required.";
      if (!email.value.trim()) errors.value.email = "Email is required.";
      if (!message.value.trim()) errors.value.message = "Message cannot be empty.";

      return Object.keys(errors.value).length === 0;
    };

    const submitForm = async () => {
      if (!validateForm()) {
        console.log("❌ Form validation failed:", errors.value);
        return;
      }

      console.log("🚀 Sending `POST` request to Flask...");

      try {
        const response = await fetch("http://127.0.0.1:5000/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name: name.value, email: email.value, message: message.value }),
        });

        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

        const data = await response.json();
        responseMessage.value = data.message;
        console.log("✅ Message sent successfully:", data);

        alert("✅ Message Sent Successfully!");

        // Clear form fields after success
        name.value = "";
        email.value = "";
        message.value = "";
      } catch (error) {
        console.error("❌ Error sending message:", error);
        alert("❌ Failed to send message. Check the console for details.");
      }
    };

    return { name, email, message, responseMessage, errors, submitForm };
  },
};
</script>
