import { configureStore } from "@reduxjs/toolkit";
import allHeroes from "./slices/allHeroes";


export default configureStore({
  reducer: {
    allHeroes,
  }
})