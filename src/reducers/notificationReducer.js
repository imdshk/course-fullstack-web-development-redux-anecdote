import { createSlice } from "@reduxjs/toolkit"

const notificationSlice = createSlice({
  name: "notification",
  initialState: "",
  reducers: {
    notificationDisplay(state, action) {
        return action.payload
    }
  }
})

export const { notificationDisplay } = notificationSlice.actions
export default notificationSlice.reducer