import { configureStore } from "@reduxjs/toolkit"

import anecdoteReducer from "./reducers/anecdoteReducer"
import filterReducer from "./reducers/filterReducers"
import notificationReducer from "./reducers/notificationReducer"

const store = configureStore({
  reducer: {
    anecdotes: anecdoteReducer,
    filter: filterReducer,
    notification: notificationReducer
  }
})

export default store
