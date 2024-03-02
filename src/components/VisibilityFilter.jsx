import { useDispatch } from "react-redux"
import { filterChange } from "../reducers/filterReducers"

const VisibilityFilter = () => {
  const dispatch = useDispatch()

  const onChange = (event) => {
    dispatch(filterChange(event.target.value))
  }

  return (
  <div>
    filter <input type="text" onChange={onChange} />
  </div>
  )
}

export default VisibilityFilter