/* eslint-disable no-undef */
const todoList = require("../todo");
const { all, markAsComplete, add, overdue, dueToday, dueLater } = todoList();
describe("Todoist test suite", () => {
  beforeAll(() => {
    // const today = new Date();
    const formattedDate = (d) => {
      return d.toISOString().split("T")[0];
    };

    var dateToday = new Date();
    const today = formattedDate(dateToday);
    const yesterday = formattedDate(
      new Date(new Date().setDate(dateToday.getDate() - 1))
    );
    const tomorrow = formattedDate(
      new Date(new Date().setDate(dateToday.getDate() + 1))
    );

    add({
      title: "Pay rent",
      dueDate: today,
      completed: false,
    });
    add({
      title: "Submit assignment",
      dueDate: yesterday,
      completed: false,
    });
    add({
      title: "File taxes",
      dueDate: tomorrow,
      completed: false,
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
  test("Should retrieve overdue items", () => {
    expect(overdue().length).toEqual(1);
  });

  test("Should retrieve due today items", () => {
    expect(dueToday().length).toEqual(2);
  });

  test("Should retrieve due later items", () => {
    expect(dueLater().length).toEqual(1);
  });
});
