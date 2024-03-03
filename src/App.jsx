import AnecdoteForm from "./components/AnecdoteForm.jsx"
import AnecdoteList from "./components/AnecdoteList.jsx"
import VisibilityFilter from "./components/VisibilityFilter.jsx"
import Notification from "./components/Notification.jsx"

const App = () => {
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