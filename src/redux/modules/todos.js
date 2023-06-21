const ADD_TODO = 'ADD_TODO'
const DELETE_TODO = 'DELETE_TODO'
const DONE_TODO = 'DONE_TODO'

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

export const doneTodo = (payload) => {
  return {
    type: DONE_TODO,
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
    case DONE_TODO:
      const findIdx = state.findIndex((el) => el.id === action.payload)
      const copyTodo = [...state]
      copyTodo[findIdx].isDone = !copyTodo[findIdx].isDone
      return (state = copyTodo)
    default:
      return state
  }
}

export default todos
