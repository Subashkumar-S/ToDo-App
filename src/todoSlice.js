import { createSlice } from "@reduxjs/toolkit";

export const VisibilityFilters = {
  ALL: "ALL",
  ACTIVE: "ACTIVE",
  COMPLETED: "COMPLETED",
};

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
    visibilityFilter: VisibilityFilters.ALL,
    incompleteTasksCount: 0,
  },

  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        id: state.todos.length + 1,
        task: action.payload,
        isCompleted: false,
      });
      state.incompleteTasksCount++;
    },
    deleteTodo: (state, action) => {
      const index = state.todos.findIndex((todo) => todo.id === action.payload);
      if (index !== -1) {
        if (!state.todos[index].isCompleted) {
          state.incompleteTasksCount--; // Decrement count if deleted todo was incomplete
        }
        state.todos.splice(index, 1);
      }
    },
    toggleComplete: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.isCompleted = !todo.isCompleted;
        if (todo.isCompleted) {
          state.incompleteTasksCount--; // Decrement count if todo is completed
        } else {
          state.incompleteTasksCount++; // Increment count if todo is marked incomplete
        }
      }
    },
    setVisibilityFilter: (state, action) => {
      state.visibilityFilter = action.payload;
    },
    deleteCompletedTasks: (state) => {
      state.todos = state.todos.filter((todo) => !todo.isCompleted);
      state.incompleteTasksCount = state.todos.filter(
        (todo) => !todo.isCompleted
      ).length;
    },
  },
});

export const { addTodo, deleteTodo, toggleComplete, setVisibilityFilter, deleteCompletedTasks } =
  todoSlice.actions;

export default todoSlice.reducer;
