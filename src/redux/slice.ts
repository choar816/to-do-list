import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todoSlice",
  initialState: {
    items: [
      { id: 0, content: "some todo 1", isChecked: false },
      { id: 1, content: "some todo 2", isChecked: false },
      { id: 2, content: "some todo 3", isChecked: false },
      { id: 3, content: "some todo 4", isChecked: false },
      { id: 4, content: "some todo 5", isChecked: false },
      { id: 5, content: "some todo 6", isChecked: false },
    ],
    lastId: 5,
  },
  reducers: {
    addTodoItem: (state) => {
      state.items.push({
        id: state.lastId + 1,
        content: `some todo ${state.items.length + 1}`,
        isChecked: false,
      });
      state.lastId += 1;
    },
    removeTodoItem: (state, action) => {
      const { index } = action.payload;
      state.items.splice(index, 1);
    },
    editTodoContent: (state, action) => {
      const { index, newContent } = action.payload;
      state.items[index].content = newContent;
    },
    toggleIsChecked: (state, action) => {
      const { index } = action.payload;
      state.items[index].isChecked = !state.items[index].isChecked;
    },
  },
});

export const { addTodoItem, removeTodoItem, editTodoContent, toggleIsChecked } =
  todoSlice.actions;
