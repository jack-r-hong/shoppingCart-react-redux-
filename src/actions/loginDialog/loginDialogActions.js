import { createAction } from 'redux-actions';

export const showLoginDialog = createAction('SHOW_LOGIN_DIALOG');
export const closeLoginDialog = {
	type:'CLOSE_LOGIN_DIALOG'
}