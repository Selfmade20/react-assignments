import axios from 'axios';


export function addBooking(booking) {
    return async dispatch => {
        try {
            const { data } = await axios.post('http://localhost:5000/', booking)
            dispatch({ type: "ADD_BOOKING", payload: data })
        } catch (e) {
            console.log(e);
        }
    }
}
