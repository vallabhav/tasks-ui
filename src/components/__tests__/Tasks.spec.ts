import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import Tasks from "../Tasks.vue";
import Task from "../Task.vue";

describe("Tasks", () => {
  it("list rendering", () => {
    const tasks = mount(Tasks, { props: {tasks: [
      {
        id: '0001',
        name: 'Learn React',
        date: '2022-01-03'
      },
      {
        id: '0002',
        name: 'Profit',
        date: '2021-01-05'
      }
    ]}});
    expect(tasks.findAllComponents(Task).length).toBe(2);
  });

  it("empty list rendering", () => {
    const tasks = mount(Tasks, { props: {tasks: []}});
    expect(tasks.findAllComponents(Task).length).toBe(0);
  });

});
