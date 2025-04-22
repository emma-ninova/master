import { test, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Projects from "../src/views/Projects.vue";

test("Projects.vue loads projects from API", async () => {
  const wrapper = mount(Projects);
  await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API response time
  expect(wrapper.find("h1").text()).toBe("My Projects");
});
