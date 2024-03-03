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

export const setNotification = (message, duration) => {
  console.log(message, duration)
  return async dispatch => {
    dispatch(notificationDisplay(message))
    setTimeout(() => {
      dispatch(notificationDisplay(""))
    }, duration*1000)
  }
}

export default notificationSlice.reducer