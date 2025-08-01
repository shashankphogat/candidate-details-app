import { configureStore } from "@reduxjs/toolkit"
import candidateReducer from "./candidateSlice"

export const store = configureStore({
  reducer: {
    candidate: candidateReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
