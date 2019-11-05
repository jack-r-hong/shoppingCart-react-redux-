import { handleActions } from 'redux-actions';

const loginDialogReducer = handleActions({
	'SHOW_LOGIN_DIALOG':(state) => {
		return {...state, loginDialog: true}
	},
	'CLOSE_LOGIN_DIALOG':(state) => {
		return {...state, loginDialog: false}
	},


},{loginDialog: false})

export default loginDialogReducer;
 