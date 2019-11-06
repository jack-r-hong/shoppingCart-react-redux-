import { handleActions } from 'redux-actions';

export const updataCommodityReducers = handleActions({
	'updataGetCommodity/RESPONSE':(state, action) =>{
		return Object.assign({}, {[action.payload.data._id]:action.payload.data})
	}
},{})