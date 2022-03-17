import { createSlice } from "@reduxjs/toolkit";

const newData = require("./resultsData.json");

export const dataSlice = createSlice({
  name: "resultsData",
  initialState: {
    results: newData,
  },
  reducers: {},
});
export default dataSlice.reducer;
