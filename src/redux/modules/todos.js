const ADD_TODO = 'ADD_TODO'
const DELETE_TODO = 'DELETE_TODO'

export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload: payload,
  }
}

export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload: payload,
  }
}

const initalState = []

const todos = (state = initalState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return (state = [...state, action.payload])
    case DELETE_TODO:
      return (state = state.filter((el) => el.id !== action.payload))
    default:
      return state
  }
}

export default todos
