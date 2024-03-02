import AnecdoteForm from "./components/AnecdoteForm.jsx"
import AnecdoteList from "./components/AnecdoteList.jsx"
import VisibilityFilter from "./components/VisibilityFilter.jsx"

const App = () => {
  return (
    <div>
      <h2>Anecdotes</h2>
      <VisibilityFilter />
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}

export default App