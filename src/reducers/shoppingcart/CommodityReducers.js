import { handleActions } from 'redux-actions';
import {merge} from "lodash";
import { combineReducers } from 'redux';
import formDataTemporaryStorageReducer from './shelvesReducers.js'
import shelvesReducers from './shelvesReducers.js';
const inistate = {
	
}

const commodityReducers = handleActions({
	"RES_GET_COMMODITY" : (state, action) => {
		return(
			[...state, action.payload]
		
		)
	},
	
	// "INVALIDATE_NAVIGATION" : (state, action) => {

	// },
}, []);

const commodityOneReducers = handleActions({
	"RES_GET_COMMODITY_ONE" : (state, action) => {
		return(
			merge({}, state, action.payload) 
		)
	}
},inistate)

const shoppingCartContentReducers = handleActions({
	'ADD_TO_SHOPPINGCART' : (state, action) => {
			
		if(state.indexOf(action.id) !== -1){
			return state;
		}else{

			return [ ...state, action ] 
		}
	},

	
},[])

const cartContentReducers = handleActions({
	'RES_GET_COMMODITY_ID' : (state, action) => {
		return{/*...state, action.payload.id */} 
		
	},
	FROM_CART_DELETE: (state, action) => {
		let newState = state;
		delete newState[action.payload.id]

		return Object.assign({}, newState)
	},	
	ADD_TO_SHOPPINGCART : (state, action) => {
		return { ...state, [action.id] : {id : action.id, name: action.name, price: action.price, productPicture:action.productPicture}}
	}
},JSON.parse(localStorage.getItem('content'))
)

export const getCommodity = (state, id) => {
	return(
		state[id].price
	)
	
}
export const getAddedIds = state => Object.keys(state)

const userAuctionCommodity =handleActions({
	'GET_USER_COMMODITY/RESPONSE': (state, action) => {
		// const commodityId = action.payload.data.map((item, i) => {

		// 	return(
		// 		({[item._id] : item})
		// 	)
		// })
		return(
			action.payload.data.map((item, i) => {

				return(
					({...state , content : item})
				)
			})
			// {...state, sss}
		)
	}
},[])


export default combineReducers({
  commodityReducers,
  commodityOneReducers,
  shoppingCartContentReducers,
  cartContentReducers,
  formDataTemporaryStorageReducer,
  shelvesReducers,
  userAuctionCommodity
  
})



