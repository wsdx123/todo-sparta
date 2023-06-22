const ADD = 'todos/ADD'
const DELETE = 'todos/DELETE'
const DONE = 'todos/DONE'
const UPDATE = 'todos/UPDATE'

export const addTodo = (payload) => {
  return {
    type: ADD,
    payload: payload,
  }
}

export const deleteTodo = (payload) => {
  return {
    type: DELETE,
    payload: payload,
  }
}

export const doneTodo = (payload) => {
  return {
    type: DONE,
    payload: payload,
  }
}

export const updateTodo = (payload) => {
  return {
    type: UPDATE,
    payload: payload,
  }
}

const initalState = []

const todos = (state = initalState, action) => {
  switch (action.type) {
    case ADD:
      return (state = [...state, action.payload])
    case DELETE:
      return (state = state.filter((el) => el.id !== action.payload))
    case DONE:
      const findIdx = state.findIndex((el) => el.id === action.payload)
      const copyTodo = [...state]
      copyTodo[findIdx].isDone = !copyTodo[findIdx].isDone
      return (state = copyTodo)
    case UPDATE:
      const findIdx1 = state.findIndex((el) => el.id === action.payload.cardId)
      const copyTodo1 = [...state]
      copyTodo1[findIdx1].todoTitle = action.payload.title
      copyTodo1[findIdx1].todoText = action.payload.text
      return (state = copyTodo1)
    default:
      return state
  }
}

export default todos
