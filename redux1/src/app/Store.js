import {configureStore} from "@reduxjs/toolkit"
import user from "../something/slice";
const Store=configureStore(
    {
        reducer:user
    }
);

export default Store;