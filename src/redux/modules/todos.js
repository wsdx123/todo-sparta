const ADD_TODO = 'ADD_TODO'

export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload: payload,
  }
}

const initalState = []

const todos = (state = initalState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return (state = [...state, action.payload])
    default:
      return state
  }
}

export default todos
