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
    setNameAndRollNo:(state,action)=>{
      let {name1,roll_no1}=action.payload
      state.name=name1
      state.roll_no=roll_no1
    }
  },
});

export const {setRollno,setname,getRollNo,getname,setNameAndRollNo}=user.actions

export default user.reducer