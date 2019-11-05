import { createActions } from 'redux-actions';
// import { picturePost } from './UploadPicture/UploadPictureAction.js';
// import axios from 'axios';

//ui actioncreater//
export const freightDialogShow = (show) =>({
	type:'FREIGHT_DIALOG_SHOW',
	payload:show
})

export const freightDialogSChecked = (name)=> ({
	type: 'FREIGHT_DIALOG_CHECKED',
	payload : name
})

export const showCircularProgress = createActions({
	IS_SHOW_CIRCULAR_PROGRESS:(show) => ({show})
})
// data actioncreate //

export const formDataTemporaryStorage = (formKey, formValue)=>({
	type: 'FORM_DATA_TEMPORARY_STORAGE',
	payload : {
		formKey: formKey,
		formValue : formValue
	}
})

export const formDataPost = createActions({
  REQUEST_POST_DATA: () =>{}, // payload creator
  RECEIVE_POST_DATA: data => ({ data }),
  ERROR_POST_DATA: err => ({err})
});

// export const formDataPost = createActions({
//   ADD_TODO: todo => ({ todo }), // payload creator
//   REMOVE_TODO: [
//     todo => ({ todo }), // payload creator
//     (todo, warn) => ({ todo, warn }) // meta
//   ]
// });

function postdata (data, imgsrc ,userName){
	return({
	seller:userName,
	title:data.title,
	subName:data.subName,
	productPicture:imgsrc,
	price:data.price,
	salesVolume:data.salesVolume,
	inventory:data.inventory,
	content:data.content,
	freight:{
	  'sevenElevenPickUpPayment' : data.sevenElevenPickUpPayment,
      'pickUpPayment' : data.pickUpPayment,
      'sevenElevenPickUp' : data.sevenElevenPickUp,
      'mailing': data.mailing,
      'homeDelivery' : data.homeDelivery,
	}
	})
}

export const formPostAPI = (data ,imgsrc,userName) => dispatch => {	
	// dispatch(formDataPost.requestPostData());	async function a(){		
		 // dispatch(formDataPost.requestPostData());
		 
		console.log(postdata(data ,imgsrc, userName))
		//  axios.post('http://localhost:3003/commodity/shelvestodatabase',
		// 		postdata(data ,imgsrc)
		// 	)
		// 	.then(response =>{
		// 		console.log(response)
		// 		dispatch(formDataPost.receivePostData(data))
				
		// 	})
		// 	.catch((err) => { console.error(err);dispatch(formDataPost.errorPostData(err)) 
		// }) ;	
	
	
	


	


}