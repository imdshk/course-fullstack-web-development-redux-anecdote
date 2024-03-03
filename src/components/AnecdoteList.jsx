import { useSelector, useDispatch } from "react-redux"
import { addVote } from "../reducers/anecdoteReducer"
import { notificationDisplay } from "../reducers/notificationReducer"

const AnecdoteList = () => {
  const dispatch = useDispatch()

  const anecdotes = useSelector(state => {
    if (state.filter === "") {
      return state.anecdotes
    } 
    const filteredAnecdotes = state.anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(state.filter))
    return filteredAnecdotes
  })

  const vote = (anecdote) => {
    dispatch(addVote(anecdote.id))
    dispatch(notificationDisplay(`You voted for "${anecdote.content}"`))
    setTimeout(() => {
      dispatch(notificationDisplay(""))
    }, 5000)
  }

  return (
    <>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </>
  )
}

export default AnecdoteList