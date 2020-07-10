const initialState = {
  bookings: []
}

export default function addBooking(state = initialState, action) {
  switch (action.type) {
    case "ADD_BOOKING": {
      return { ...state, bookings: [...state.bookings, action.payload] }
    }
    default:
      return state
  }
}