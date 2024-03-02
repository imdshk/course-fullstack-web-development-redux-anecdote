export const filterChange = filter => {
  return {
    type: "FILTER_ANECDOTES",
    payload: filter
  }
}

const filterReducer = (state = "", action) => {
  switch(action.type) {
    case "FILTER_ANECDOTES":
      return action.payload
    default:
      return state
  }
}

export default filterReducer