import { configureStore } from "@reduxjs/toolkit";
import { isImportOrExportSpecifier } from "typescript";
import dataReducer from "./dataSlice";
export default configureStore({
  reducer: {
    data: dataReducer,
  },
});
