import axios from "axios"

const baseUrl = "http://localhost:3001/anecdotes"

const getId = () => (100000 * Math.random()).toFixed(0)

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const createAnecdote = async (content) => {
    const anecdote = {
        content: content,
        votes: 0,
        id: getId()
    }
    const response = await axios.post(baseUrl, anecdote)
    return response.data
}

const updateVote = async (anecdote) => {
    const anecdoteUpdated = {
        content: anecdote.content,
        votes: anecdote.votes + 1,
        id: anecdote.id
    }
    const response = await axios.put(`${baseUrl}/${anecdote.id}`, anecdoteUpdated)
    return response.data
}

export default { getAll, createAnecdote, updateVote }