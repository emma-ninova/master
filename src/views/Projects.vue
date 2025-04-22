<template>
  <div class="container mx-auto p-6">
    <h1 class="text-2xl font-bold text-gray-800 text-center mb-6">My Projects</h1>

    <!-- 🚀 Show a loading message while fetching -->
    <p v-if="loading" class="text-gray-600 text-center">Loading projects...</p>

    <!-- ❌ Show an error message if fetching fails -->
    <p v-if="error" class="text-red-600 text-center">{{ error }}</p>

    <!-- ✅ Display projects when data is available -->
    <div v-if="projects.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="project in projects" :key="project.id" class="bg-white p-6 shadow-md rounded-lg border border-gray-200">

        <!-- 🚀 Project Name -->
        <h2 class="text-xl font-semibold text-gray-900">{{ project.name }}</h2>

        <!-- 📌 Project Description -->
        <p class="text-gray-600 text-sm mb-3">{{ project.description }}</p>

        <!-- 🛠 Tech Stack & Testing Approach -->
        <p class="text-gray-700 text-sm"><strong>🛠 Tech Stack:</strong> {{ project.tech_stack }}</p>
        <p class="text-gray-700 text-sm"><strong>🧪 Testing Approach:</strong> {{ project.testing }}</p>

        <!-- 🔗 Display project link if it's valid -->
        <div v-if="isValidUrl(project.link)">
          <a :href="project.link" target="_blank" class="text-blue-500 hover:underline font-semibold">
            🔗 View Project
          </a>
        </div>
        <p v-else class="text-gray-400 italic text-sm">No live project available</p>

      </div>
    </div>

    <!-- 🚨 Show a message if no projects exist -->
    <p v-else-if="!loading && !error" class="text-gray-600 text-center">🚀 No projects available.</p>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  setup() {
    const projects = ref([]);
    const loading = ref(true);
    const error = ref(null);

    onMounted(async () => {
      try {
        console.log("🚀 Fetching projects from Flask...");
        const response = await fetch("http://127.0.0.1:5000/projects");

        if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);

        const data = await response.json();
        console.log("📌 Projects received:", data);

        projects.value = data;  // ✅ Store fetched projects
      } catch (err) {
        console.error("❌ Error fetching projects:", err);
        error.value = "Failed to load projects.";
      } finally {
        loading.value = false;
      }
    });

    // ✅ Function to check if URL is real (removes placeholders)
    const isValidUrl = (url) => {
      return url && url.startsWith("http") && !url.includes("myportfolio.com") && !url.includes("myecommerce.com");
    };

    return { projects, loading, error, isValidUrl };
  },
};
</script>
