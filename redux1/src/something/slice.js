import { createSlice } from "@reduxjs/toolkit";

const initalstate = {
  name: "Hamza",
  roll_no: 84,
};
export const user = createSlice({
  name: "chici",
  initialState: initalstate,
  reducers: {
    getname: (state, action) => {
      return state.name;
    },
    setname: (state, action) => {
      let value = action.payload;

      state.name = value;
    },
    getRollNo: (state, action) => {
      return state.roll_no;
    },
    setRollno: (state, action) => {
      let value = action.payload;
      state.roll_no = value;
    },
  },
});

export const {setRollno,setname,getRollNo,getname}=user.actions

export default user.reducer