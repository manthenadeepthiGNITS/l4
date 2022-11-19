/* eslint-disable no-undef */
const todoList = require("../todo");
const { all, markAsComplete, add } = todoList();
describe("Todoist test suite", () => {
  beforeAll(() => {
    // const today = new Date();
    add({
      title: "todo test",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
  });
  test("should add new todo", () => {
    const todoItemsCount = all.length;
    add({
      title: "todo test",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
    expect(all.length).toBe(todoItemsCount + 1);
  });
  test("should mark a todo as cpmplete", () => {
    expect(all[0].completed).toBe(false);
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });
});
