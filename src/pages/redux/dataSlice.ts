import { createSlice } from "@reduxjs/toolkit";

const newData = require("./resultsData.json");

export const dataSlice = createSlice({
  name: "resultsData",
  initialState: {
    data: {
      latestResults: {
        technology: [
          { unit: "one", percentage: 25 },
          { unit: "two", percentage: 30 },
          { unit: "three", percentage: 55 },
          { unit: "four", percentage: 21 },
        ],
        ecology: [
          { unit: "one", percentage: 25 },
          { unit: "two", percentage: 30 },
          { unit: "three", percentage: 55 },
          { unit: "four", percentage: 21 },
        ],
        realEstate: [
          { unit: "one", percentage: 25 },
          { unit: "two", percentage: 30 },
          { unit: "three", percentage: 55 },
          { unit: "four", percentage: 21 },
        ],
        education: [
          { unit: "one", percentage: 25 },
          { unit: "two", percentage: 30 },
          { unit: "three", percentage: 55 },
          { unit: "four", percentage: 21 },
        ],
        jobMarket: [
          { unit: "one", percentage: 25 },
          { unit: "two", percentage: 30 },
          { unit: "three", percentage: 55 },
          { unit: "four", percentage: 21 },
        ],
      },
      timeSpent: {
        "week-one": {
          vocab: {
            id: "vocab",
            color: "#FF808B",
            "hours-spent": [0, 1, 3, 1, 4, 0, 0],
          },
          grammar: {
            id: "gram",
            color: "#4D4CAC",
            "hours-spent": [0, 4, 2, 4, 1, 0, 0],
          },
          listening: {
            id: "listen",
            color: "#5E81F4",
            "hours-spent": [0, 3, 1, 1, 4, 1, 0],
          },
          writting: {
            id: "write",
            color: "#C8C9E9",
            "hours-spent": [0, 1, 3, 1, 2, 2, 0],
          },
        },
      },
    },
    results: newData,
  },
  reducers: {},
});
export default dataSlice.reducer;
