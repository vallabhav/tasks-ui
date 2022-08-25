import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import AddTask from "../AddTask.vue";

describe("Add Task", () => {
  it("render without form", () => {
    const addTask = mount(AddTask, { props: {}});
    expect(addTask.element.getElementsByClassName("form-input").length).toBe(0);
    expect(addTask.element.getElementsByTagName("button").length).toBe(1);
  });

  it("render with form", () => {
    const addTask = mount(AddTask, { props: {showForm: true}});
    expect(addTask.element.getElementsByClassName("form-input").length).toBe(2);
    expect(addTask.element.getElementsByTagName('button').length).toBe(2);
  });
});
