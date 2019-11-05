import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux'


// const array = Object.keys(JSON.parse(localStorage.getItem('content') || 0)).map(item=>({[item]:1}));


const count =handleActions({
	'INCREMENT':(state, action) => {
		 return { ...state,[action.payload]:(state[action.payload] || 0) +1}
	},
	'DECREMENT':(state, action) => {
		return { ...state,[action.payload]:(state[action.payload] || 0) -1}
	},
	ADD_TO_SHOPPINGCART:(state,action) => {
		return { ...state,[action.id] : 1}
	}
},JSON.parse(localStorage.getItem('quantity')) || {}
)

export const getIdQuantity = (state, id) => {
	return(
		state[id]
	)
	
}

export default combineReducers({
  count
})