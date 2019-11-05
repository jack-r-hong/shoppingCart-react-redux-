import React ,{ Component }from 'react';
import Dropzone from 'react-dropzone';

import axios from 'axios';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { connect } from 'react-redux';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import Button from '@material-ui/core/Button';

import {  pictureUperApi, picturePost } from '../../actions/UploadPicture/UploadPictureAction.js';

	// const Client_secret = 'fec9316b4911bc023024d998bae3fda6a724a6af';
	// const Client_ID ='60afca6a28f6c69'
	// const token ='7faef68f6216e745b590b6fd4a157356ad57d37b';





 class UploadPicture extends Component {

	constructor(props) {
	    super(props);


	    this.state = {
	      uploadedFile:'',
	      deletehash:'',
	      imgCloudSrc: '',
	      imgSrc:''
	    };
	}

	handleImg = file => {
		
		  var reader = new FileReader();
		  
			
		   reader.onloadend = function (e) {
		      this.setState({
		      	uploadedFile:file,
		        imgSrc: [reader.result]
		      })

		    }.bind(this);
		    
		  console.log(this.state.imgSrc) 
	}



	handleUpload = files => {
	  // Push all the axios request promise into a single array
	  	if(!!files){
		    // Initial FormData
		    const formData = new FormData();
				 formData.append('image', files[0]); //required
				 formData.append('description', 'test'); //optional
				 formData.append('album', 'qhn6VMd'); //optional
				 formData.append('name', files[0].name); //optional
			console.log(files[0]['name']);
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
				   	 console.log(res)
				     console.log(res.data.data.link)
				     	this.setState({
				      		imgCloudSrc: res.data.data.link,
				      		deletehash:res.data.data.deletehash
				    	});
				    	alert('上傳圖片 成功')

				   }).catch(e => {
				     console.log(e)
				})
		    )
		}else{
			alert('未選擇圖片')
		}


	}


    render() {
    	// console.log(this.props)
	    return (
		    <div>
			    <Card style={{'width':'100%'}}>
			      <CardActionArea>
			        <CardContent>
						<Dropzone onDrop={file => this.props.pictureUper(file)}>
						  {({getRootProps, getInputProps}) => (
						    <section>
						    	
						      <div {...getRootProps()} style={{
										width:'100%',
										height:'100%',

									}}>
						        <input {...getInputProps()} />
						        	{
						        		this.props.Preview ?
						        			// <div style={{
						        			// 	'bacj'
						        			// }} />
						        			<img src={`${this.props.Preview}`} width='100%' height='100%' alt='sss'/>	
						        		:
											<div style={{
												width:'100%',
												height:'300px',
												position: 'relative',
											    border: '2px dotted #000',
											    'borderRadius': '25px',
											    
											}}>
												<CloudUploadIcon style={{
													'position' : 'absolute',
													top:'50%',
													left:'50%',
													transform: 'translateX(-50%) translateY(-50%)'
				
												}}/>
											</div>					        			
						        	}

						      </div>
						    </section>
						  )}
						</Dropzone>		          
			        </CardContent>
			      </CardActionArea>
			      <CardActions>
					<Dropzone onDrop={file => this.props.pictureUper(file)}>
					  {({getRootProps, getInputProps}) => (
					    <section>
					    	
					      <div {...getRootProps()} >
					        <input {...getInputProps()} />
								<Button size="small" color="primary" variant="outlined" >
									重新選擇
								</Button>
					      </div>
					    </section>
					  )}
					</Dropzone>			      
			        
			        <Button size="small" color="primary" variant="contained" onClick={() => this.props.picturePost(this.props.willUploadPicture)}>
			          上傳
			        </Button>
			      </CardActions>
			    </Card>
		    </div>
	    )

	}
 }

 const mapStateProps = state =>{
 	return({
 		Preview:state.commodityReducers.shelvesReducers.pictureUper.Preview,
 		willUploadPicture:state.commodityReducers.shelvesReducers.pictureUper.file
 	})
 }

const mapDispatchProps = dispatch => {
	return({
		pictureUper: file => dispatch(pictureUperApi(file)),//dispatch(pictureUper.handleChangePicture(file))
		picturePost: file => dispatch(picturePost(file))

	})
	
}

export default connect(
	mapStateProps,
	mapDispatchProps
)(UploadPicture);
