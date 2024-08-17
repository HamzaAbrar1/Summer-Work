import { createSlice, nanoid } from "@reduxjs/toolkit";

const inital = {
  todos: [
    {
      id: nanoid(),
      message: "first todo message",
    },
  ],
};

export const TodoSlice = createSlice({
  name: "todos",
  initialState: inital,

  reducers: {
    addtodo: (state, action) => {
      let message = action.payload;
      let todo = {
        id: nanoid(),
        message: message,
      };
    //   console.log("the message which has been dispatched is as following",message)

      state.todos.push(todo);
      console.log(state.todos)
    },
    removeTodo: (state, action) => {
      let id = action.payload;
      let array = state.todos;
      let newar = array.filter((data) => data.id != id);

      state.todos = newar;
    },
    updateTodo: (state, action) => {
      let { id, message } = action.payload;
      let array = state.todos;
      let newar = array.map((data) =>
        data.id == id ? { ...data, message: message } : data
      );
      state.todos=newar
    },
  },
});


export default TodoSlice.reducer;

export const {addtodo,updateTodo,removeTodo} = TodoSlice.actions