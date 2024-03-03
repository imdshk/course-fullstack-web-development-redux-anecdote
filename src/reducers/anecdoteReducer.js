import { createSlice } from "@reduxjs/toolkit"

const getId = () => (100000 * Math.random()).toFixed(0)

const anecdoteSlice = createSlice({
  name: "anecdotes",
  initialState: [],
  reducers: {
    addVote(state, action) {
      const anecdoteToUpdate = state.filter(anecdote => {
        return anecdote.id === action.payload
      })

      const updatedAnecdote = { ...anecdoteToUpdate[0], "votes": anecdoteToUpdate[0].votes + 1 }
      const updatedAnecdotes = state.map(anecdote => {
        return (
          anecdote.id === updatedAnecdote.id 
          ? updatedAnecdote 
          : anecdote
        )
      })
      updatedAnecdotes.sort((a, b) => b.votes - a.votes)
      return updatedAnecdotes
    },
    addAnecdote(state, action) {
      const content = action.payload
      const updatedAnecdotes = state.concat({
        content: content,
        id: getId(),
        votes: 0
      })
      return updatedAnecdotes
    },
    setAnecdotes(state, action) {
      return action.payload
    }
  }
})

export const { addVote, addAnecdote, setAnecdotes } = anecdoteSlice.actions
export default anecdoteSlice.reducer