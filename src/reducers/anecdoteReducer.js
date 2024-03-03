import anecdoteService from "../services/anecdotes"

import { createSlice } from "@reduxjs/toolkit"

const anecdoteSlice = createSlice({
  name: "anecdotes",
  initialState: [],
  reducers: {
    addVote(state, action) {
      const anecdoteToUpdate = state.filter(anecdote => {
        return anecdote.id === action.payload.id
      })
      const updatedAnecdote = { ...anecdoteToUpdate[0], "votes": action.payload.votes }
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
      state.push(action.payload)
    },
    setAnecdotes(state, action) {
      return action.payload
    }
  }
})

export const { addVote, addAnecdote, setAnecdotes } = anecdoteSlice.actions

export const initializeAnecdotes = () => {
  return async dispatch => {
    anecdoteService
        .getAll()
        .then(anecdotes => {
          anecdotes.sort((a, b) => b.votes - a.votes)
          dispatch(setAnecdotes(anecdotes))
        })
    }
}

export const createAnecdote = (content) => {
  return async dispatch => {
    const response = await anecdoteService.createAnecdote(content)
    dispatch(addAnecdote(response))
  }
}

export default anecdoteSlice.reducer