import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  flag: false,
  experience: { flag: false },
};

export const experienceSlice = createSlice({
  name: "experience",
  initialState,
  reducers: {
    setExperience: (state, action) => {
      console.log("hellodafuq");
      console.log(action.payload);
      state.experience = { ...action.payload };
    },
  },
});

// Action creators are generated for each case reducer function
export const { setExperience } = experienceSlice.actions;

export default experienceSlice.reducer;
