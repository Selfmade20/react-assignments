const initialState = {
    users: []
  }
  
  export default function logIn(state = initialState, action) {
    switch (action.type) {
      case "LOG_IN": {
        return { ...state, users: [...state.users, action.payload] }
      }
      default:
        return state
    }
  }