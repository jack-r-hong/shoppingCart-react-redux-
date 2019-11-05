import { combineReducers } from 'redux'
import uiReducers from './uiReducers.js'
import userReducers from './userReduers.js';
import commodityReducers from './shoppingcart/CommodityReducers.js'
import countReducers from './count/countReducer.js'
import  * as fromCount  from './count/countReducer.js';
import  * as fromCart  from './shoppingcart/CommodityReducers.js';

const getIdQuantity = (state, id) => fromCount.getIdQuantity(state.countReducers.count, id);
const getCommodity = (state, id) => fromCart.getCommodity(state.commodityReducers.cartContentReducers, id)
const getAddedIds =(state) => fromCart.getAddedIds(state.commodityReducers.cartContentReducers)

export const getItemTotal = (state, id) => {
	let itemTotal = getAddedIds(state).map((item) => (
		{[item]:getIdQuantity(state,item)*getCommodity(state,item)}
	))
	let x ={}
	for( let i in itemTotal){	
		x = Object.assign(x, itemTotal[i])
	}
	return x
	
	
}
export const getTotal = (state, id) => {
	return(
		getAddedIds(state).length == 0? 
		
		0
			:
		getAddedIds(state).map((item) =>  (getIdQuantity(state,item)) *  (!!getAddedIds(state)? getCommodity(state,item): 0 )   ).reduce((a,b)=>a+b)
		
	)

}


export default combineReducers({
  uiReducers,
  userReducers,
  commodityReducers,
  countReducers,
})