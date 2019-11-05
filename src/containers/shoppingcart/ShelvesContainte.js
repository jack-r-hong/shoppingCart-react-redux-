import React from 'react';
import { connect } from 'react-redux';
import Shelves from '../../components/shoppingcart/Shelves.js'
import UploadPicture from '../../components/UploadPicture/UploadPicture.js';
import CircularProgress from '@material-ui/core/CircularProgress';
import { freightDialogShow, freightDialogSChecked, formDataTemporaryStorage } from '../../actions/shelvesActions.js';
import { picturePost,formPostAPI } from '../../actions/UploadPicture/UploadPictureAction.js';
import { showCircularProgress } from '../../actions/shelvesActions.js';

function ShelvesContainer (props) {
	console.log(props)
	return(
		<div>
			<Shelves
				freightDialogRedcer={props.freightDialogRedcer}
				freightDialogShow={props.freightDialogShow}
				freightDialogSChecked={props.freightDialogSChecked}
				freightDialogSCheckedRedcer={props.freightDialogSCheckedRedcer}
				formDataTemporaryStorage={props.formDataTemporaryStorage}
				formDataPost={props.formDataPost}
				willUploadPicture={props.willUploadPicture}
				formTemporaryStorageReducer={props.formTemporaryStorageReducer}
				picturePost={props.picturePost}
				userName={props.userName}
				showCircularProgress={props.showCircularProgress}
			>
				<UploadPicture />
			</Shelves>	

			{
				props.showCircularProgressReducer? 
				<CircularProgress style ={{position: 'fixed',top:'50%',right:'50%'}} />		
					:
				''
			}
			

		</div>

	)
}

const mapStateProps = (state) =>{
	return({
		freightDialogRedcer:state.uiReducers.shelvesUiReducers.freightDialogRedcer,
		freightDialogSCheckedRedcer:state.uiReducers.shelvesUiReducers.freightDialogSCheckedRedcer,
		willUploadPicture:state.commodityReducers.shelvesReducers.pictureUper.file,
		formTemporaryStorageReducer:state.commodityReducers.formDataTemporaryStorageReducer.formDataTemporaryStorageReducer,
		userName:state.userReducers.username,
		showCircularProgressReducer:state.uiReducers.showCircularProgress.show
	})
	
}

const mapDispatchProps = (dispatch) => {
	return({
		freightDialogShow:(show) => dispatch(freightDialogShow(show)),
		freightDialogSChecked:(name)=> dispatch(freightDialogSChecked(name)),
		formDataTemporaryStorage:(formKey, formValue) => dispatch(formDataTemporaryStorage(formKey, formValue)),
		formDataPost: (data) => dispatch(formPostAPI(data)),
		picturePost: (pictrue, data ,userName) => dispatch(picturePost(pictrue, data, userName)),
		showCircularProgress:(show)=> dispatch(showCircularProgress.isShowCircularProgress(show))
	})
}

export default connect(
	mapStateProps,
	mapDispatchProps
)(ShelvesContainer);