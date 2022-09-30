import { configureStore } from "@reduxjs/toolkit";
import experienceSlice from "./slices/experience";

export const store = configureStore({
  reducer: { experience: experienceSlice },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ["experience/setExperience"],
        ignoredPaths: ["experience.experience"],

        // Ignore these field paths in all actions
      },
    }),
});
