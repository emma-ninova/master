import { describe, it, expect, beforeEach, vi } from "vitest";
import { mount, flushPromises } from "@vue/test-utils";
import { nextTick } from "vue";
import ContactForm from "../../src/components/ContactForm.vue";
import axios from "axios";
import flushPromises from "flush-promises";

// ✅ Keep the Vitest mock!
vi.mock("axios", () => ({
  post: vi.fn(() => Promise.resolve({ data: { success: true } })),
}));

describe("ContactForm.vue", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(ContactForm);
  });

  it("shows validation error when submitting an empty form", async () => {
    await wrapper.find("form").trigger("submit.prevent");
    await nextTick();

    const errorMessages = wrapper.findAll("span.error");
    expect(errorMessages.length).toBeGreaterThan(0);
    expect(errorMessages[0].text()).toContain("required");
  });

  it("displays success message after form submission", async () => {
    await wrapper.find("[data-test='email']").setValue("john@example.com");
    await wrapper.find("[data-test='message']").setValue("Hello!");
    await wrapper.find("form").trigger("submit.prevent");

    // Wait for manual delay to ensure all DOM updates
    await new Promise((resolve) => setTimeout(resolve, 600));

    const successMessage = wrapper.find("[data-test='success-message']");
    expect(successMessage.exists()).toBe(true);
    expect(successMessage.text()).toContain("Your message has been sent!");
  });
});
