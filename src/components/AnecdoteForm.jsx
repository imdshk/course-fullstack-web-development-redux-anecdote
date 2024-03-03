import { useDispatch } from "react-redux"
import { addAnecdote } from "../reducers/anecdoteReducer"
import { notificationDisplay } from "../reducers/notificationReducer"

const AnecdoteForm = () => {
  const dispatch = useDispatch()
  
  const createAnecdote = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ""
    dispatch(addAnecdote(content))
    dispatch(notificationDisplay(`Anecdote "${content}" created successfully`))
    setTimeout(() => {
      dispatch(notificationDisplay(""))
    }, 5000)
  }

  return (
    <>
      <h2>create new</h2>
      <form onSubmit={createAnecdote}>
        <div><input name="anecdote" /></div>
        <button type="submit" >create</button>
      </form>
    </>
  )
}

export default AnecdoteForm