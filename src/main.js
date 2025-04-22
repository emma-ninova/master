import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"; // ✅ Keep this line
import "./assets/main.css"; // ✅ Add this line to import Tailwind

const app = createApp(App);
app.use(router);
app.mount("#app");
