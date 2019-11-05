import { handleActions } from 'redux-actions';
import { pictureUper} from '../UploadPicture/UploadPictureReducers.js';
import { combineReducers } from 'redux'

const iniState = {
      title: '', 
      subName: '', 
      price: '', 
      inventory : '' , 
      content:'',
      'sevenElevenPickUpPayment' : '',
      'pickUpPayment' : '',
      'sevenElevenPickUp' : '',
      'mailing': '',
      'homeDelivery' : '',
      'productPicture' :''
}

const formDataTemporaryStorageReducer = handleActions({
	'FORM_DATA_TEMPORARY_STORAGE' : (state, action) =>{
		return { ...state,[action.payload.formKey] : action.payload.formValue }
	},
	'UPLOAD_PICTURE/RECEIVE': (state,action) => {
		return { ...state, productPicture : action.payload.src}
	}
},iniState)


export default combineReducers({
	formDataTemporaryStorageReducer,
	pictureUper,
	
})