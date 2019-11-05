import { createActions } from 'redux-actions';
import axios from 'axios';


	// handleImg = file => {
	// 	var files = file[0];
	// 	  var reader = new FileReader();
	// 	  var url = reader.readAsDataURL(files);

	// 	   reader.onloadend = function (e) {
	// 	      this.setState({
	// 	      	uploadedFile:file,
	// 	        imgSrc: [reader.result]
	// 	      })
	// 	    }.bind(this);
	// 	  console.log(this.state.imgSrc) 
	// }



export const pictureUper = createActions({
	HANDLE_CHANGE_PICTURE: (file,src) =>(
		{file,src}	
	),
	UPLOAD_PICTURE: {
		REQUEST: () => {},
		RECEIVE: [src =>({src}), () =>({success:true})],
		ERROR: [err =>({err}), () =>({success:false})]
	}

})

export const pictureUperApi = file => dispatch => {
	var files = file[0];
	var reader = new FileReader(files);
	  
	reader.onloadend = function(event) {
		dispatch(pictureUper.handleChangePicture(file[0],reader.result))
	};
}



function postdata (data, imgsrc, userName){
	return({
	seller:userName,
	title:data.title,
	subName:data.subName,
	productPicture:imgsrc,
	price:data.price,
	inventory:data.inventory,
	content:data.content,
	salesVolume:0,
	freight:{
	  'sevenElevenPickUpPayment' : data.sevenElevenPickUpPayment,
      'pickUpPayment' : data.pickUpPayment,
      'sevenElevenPickUp' : data.sevenElevenPickUp,
      'mailing': data.mailing,
      'homeDelivery' : data.homeDelivery,
	}
	})
}

export const picturePost = (files, data,userName) => dispatch => {
	dispatch(pictureUper.uploadPicture.request())
	if(!!files){
		    // Initial FormData
		    const formData = new FormData();
				 formData.append('image', files); //required
				 formData.append('description', 'test'); //optional
				 formData.append('album', 'qhn6VMd'); //optional
				 formData.append('name', files.name); //optional
			console.log(files['name']);
		    // Make an AJAX upload request using Axios (replace Cloudinary URL below with your own)
		    return (
				axios({
				   method: 'POST',
				   url: 'https://api.imgur.com/3/image',
				   data: formData,
				   headers: {
				   'Accept': 'multipart/form-data',
				   Authorization: 'Bearer 7faef68f6216e745b590b6fd4a157356ad57d37b' //'Client-ID 60afca6a28f6c69' //放置你剛剛申請的Client-ID
				   },

				   }).then(res => {
				   	 // console.log(res)
				     // console.log(res.data.data.link)
				     dispatch(pictureUper.uploadPicture.receive(res.data.data.link))
				     
					console.log(postdata(data ,res.data.data.link, userName))
				    dispatch(formDataPost.requestPostData());
				    axios.post('http://localhost:3003/commodity/shelvestodatabase',
							postdata(data ,res.data.data.link, userName)
						)
						.then(response =>{
							console.log(response)
							dispatch(formDataPost.receivePostData(data))
							
						})
						.catch((err) => { console.error(err);dispatch(formDataPost.errorPostData(err)) 
					}) ;

				   }).catch(e => {
				     dispatch(pictureUper.uploadPicture.error())
				})
		    )
		}else{
			alert('未選擇圖片')
		}
	
}
export const formDataPost = createActions({
  REQUEST_POST_DATA: () =>{}, // payload creator
  RECEIVE_POST_DATA: data => ({ data }),
  ERROR_POST_DATA: err => ({err})
});


export const formPostAPI = (data ,imgsrc,userName) => dispatch => {	
	// dispatch(formDataPost.requestPostData());	async function a(){		
		 dispatch(formDataPost.requestPostData());
		 
		 console.log(postdata(data ,imgsrc,userName))

		 axios.post('http://localhost:3003/commodity/shelvestodatabase',
				postdata(data ,imgsrc,userName)
			)
			.then(response =>{
				console.log(response)
				dispatch(formDataPost.receivePostData(data))
				
			})
			.catch((err) => { console.error(err);dispatch(formDataPost.errorPostData(err)) 
		}) ;	

}



// export const picturePost = files => dispatch => {
// 	dispatch(pictureUper.uploadPicture.request())
// 	if(!!files){
// 		    // Initial FormData
// 		    const formData = new FormData();
// 				 formData.append('image', files); //required
// 				 formData.append('description', 'test'); //optional
// 				 formData.append('album', 'qhn6VMd'); //optional
// 				 formData.append('name', files.name); //optional
// 			console.log(files['name']);
// 		    // Make an AJAX upload request using Axios (replace Cloudinary URL below with your own)
// 		    return (
// 				axios({
// 				   method: 'POST',
// 				   url: 'https://api.imgur.com/3/image',
// 				   data: formData,
// 				   headers: {
// 				   'Accept': 'multipart/form-data',
// 				   Authorization: 'Bearer 7faef68f6216e745b590b6fd4a157356ad57d37b' //'Client-ID 60afca6a28f6c69' //放置你剛剛申請的Client-ID
// 				   },

// 				   }).then(res => {
// 				   	 console.log(res)
// 				     console.log(res.data.data.link)
// 				     dispatch(pictureUper.uploadPicture.receive(res.data.data.link))
// 				    	alert('上傳圖片 成功')

// 				   }).catch(e => {
// 				     dispatch(pictureUper.uploadPicture.error())
// 				})
// 		    )
// 		}else{
// 			alert('未選擇圖片')
// 		}
	
// }


	// handleUpload = files => {
	//   // Push all the axios request promise into a single array
	//   	if(!!files){
	// 	    // Initial FormData
	// 	    const formData = new FormData();
	// 			 formData.append('image', files[0]); //required
	// 			 formData.append('description', 'test'); //optional
	// 			 formData.append('album', 'qhn6VMd'); //optional
	// 			 formData.append('name', files[0].name); //optional
	// 		console.log(files[0]['name']);
	// 	    // Make an AJAX upload request using Axios (replace Cloudinary URL below with your own)
	// 	    return (
		    	
	// 			axios({
	// 			   method: 'POST',
	// 			   url: 'https://api.imgur.com/3/image',
	// 			   data: formData,
	// 			   headers: {
	// 			   'Accept': 'multipart/form-data',
	// 			   Authorization: 'Bearer 7faef68f6216e745b590b6fd4a157356ad57d37b' //'Client-ID 60afca6a28f6c69' //放置你剛剛申請的Client-ID
	// 			   },

	// 			   }).then(res => {
	// 			   	 console.log(res)
	// 			     console.log(res.data.data.link)
	// 			     	this.setState({
	// 			      		imgCloudSrc: res.data.data.link,
	// 			      		deletehash:res.data.data.deletehash
	// 			    	});
	// 			    	alert('上傳圖片 成功')

	// 			   }).catch(e => {
	// 			     console.log(e)
	// 			})
	// 	    )
	// 	}else{
	// 		alert('未選擇圖片')
	// 	}


	// }
