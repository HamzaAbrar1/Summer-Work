import {configureStore} from "@reduxjs/toolkit";

import TodosSlice from "./TodosSlice.js";
export const store=configureStore({
 reducer:TodosSlice   
}
)

export default store