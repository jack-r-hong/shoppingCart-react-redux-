import { handleActions } from 'redux-actions';
// import Immutable from 'immutable';

import { combineReducers } from 'redux'
import loginDialogReducers from './loginDialog/loginDialogReducers.js';
import shelvesUiReducers from './shoppingcart/shelvesUiReducers.js';

const state = ({show: false});

export const menuBottonReducers = handleActions({
	SHOW_DRAWERS :
	 (state, action) => {
	 	return({show: true})
	 },
	 HIDE_DRAWERS :
	 (state, action) => {
	 	return({show: false})
	 },

}, state)

// const uiReducers = (state = {show: false}, action) =>{
// 	switch (action.type) {
//     case 'SHOW_DRAWERS':
//       return({show: true})
//     case 'HIDE_DRAWERS':
//       return({show: false})
//     default:
//       return state
//   }
// }

const showCartFreightDrawers = handleActions({
	'SHOW_FREIGHT_DRAWERS':
	(state, action) => {
		return(
			{...state, show:action.payload}
		)
	}

},{show:false})

const showUserDrawers = handleActions({
	'SHOW_USER_DRAWERS':
	(state, action) => {
		return(
			{...state, show:action.payload}
		)
	}

},{show:false})

const showCircularProgress =handleActions({
	IS_SHOW_CIRCULAR_PROGRESS:(state, action) =>{
		return(
			{...state, show:action.payload}
		)
	}
},{show:false})

const registerUserNameValid = handleActions({
	'VALID_USER_NAME/RESPONSE':(state, action) => {
		return {...state, Valid:action.payload.userNameValid}
	}
},{Valid: false})

 export default combineReducers({
 	menuBottonReducers,
	loginDialogReducers,
	showCartFreightDrawers,
	shelvesUiReducers,
	showUserDrawers,
	showCircularProgress,
	registerUserNameValid
 })




// 'HIDE_DRAWERS' (state, action) =>{
// 		state.set(
// 	      'show',
// 	      false
// 	    )
// 	}