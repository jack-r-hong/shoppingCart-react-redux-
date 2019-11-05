import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux'

const freightDialogRedcer = handleActions({
	'FREIGHT_DIALOG_SHOW' : (state, action) =>{
		return {...state,dialogShow : action.payload}
	}
},{dialogShow: false})

const freightDialogSCheckedRedcer =handleActions({
	'FREIGHT_DIALOG_CHECKED' : (state, action) =>{
		return{ ...state, [action.payload] : !state[action.payload]}
	}
},{		
	checkedA: true,
	checkedB: false,
	checkedC: false,
	checkedD: false,
	checkedE: false,
})

export default combineReducers({
	freightDialogRedcer,
	freightDialogSCheckedRedcer
})