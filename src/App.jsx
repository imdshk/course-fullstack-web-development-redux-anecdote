import { useEffect } from "react"
import { useDispatch } from "react-redux"

import { initializeAnecdotes } from "./reducers/anecdoteReducer.js"

import AnecdoteForm from "./components/AnecdoteForm.jsx"
import AnecdoteList from "./components/AnecdoteList.jsx"
import VisibilityFilter from "./components/VisibilityFilter.jsx"
import Notification from "./components/Notification.jsx"

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initializeAnecdotes())
  }, [])

  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification />
      <VisibilityFilter />
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}

export default App