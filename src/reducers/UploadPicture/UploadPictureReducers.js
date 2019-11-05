import { handleActions } from 'redux-actions';

export const pictureUper = handleActions({
	'HANDLE_CHANGE_PICTURE':(state,action) => {
		return(
			{...state, Preview:action.payload.src, file:action.payload.file}
		)
	}
},{})