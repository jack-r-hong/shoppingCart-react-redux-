import React,{Component} from 'react';
import { connect } from 'react-redux';
import UpdataCommodity from '../../components/shoppingcart/UpdataCommodity.js'
import UploadPicture from '../../components/UploadPicture/UploadPicture.js';
import CircularProgress from '@material-ui/core/CircularProgress';
import { freightDialogShow, freightDialogSChecked, formDataTemporaryStorage } from '../../actions/shelvesActions.js';
import { picturePost,formPostAPI } from '../../actions/UploadPicture/UploadPictureAction.js';
import { showCircularProgress } from '../../actions/shelvesActions.js';
import {getCommodityOneUpdata} from '../../actions/CommodityActions.js';


class UpdataCommodityContainer extends Component  {
	componentDidMount() {
		
		this.props.getCommodityOneUpdata(window.location.search.substr(1))

	    
	    
	}


	render(){
		return(
			<div>
				<UpdataCommodity
					freightDialogRedcer={this.props.freightDialogRedcer}
					freightDialogShow={this.props.freightDialogShow}
					freightDialogSChecked={this.props.freightDialogSChecked}
					freightDialogSCheckedRedcer={this.props.freightDialogSCheckedRedcer}
					formDataTemporaryStorage={this.props.formDataTemporaryStorage}
					formDataPost={this.props.formDataPost}
					willUploadPicture={this.props.willUploadPicture}
					formTemporaryStorageReducer={this.props.formTemporaryStorageReducer}
					picturePost={this.props.picturePost}
					userName={this.props.userName}
					showCircularProgress={this.props.showCircularProgress}
					formData={this.props.formData}
				>
					
				</UpdataCommodity>	

				{
					this.props.showCircularProgressReducer? 
					<CircularProgress style ={{position: 'fixed',top:'50%',right:'50%'}} />		
						:
					''
				}

			</div>

		)
	}

}

const mapStateProps = (state) =>{
	return({
		freightDialogRedcer:state.uiReducers.shelvesUiReducers.freightDialogRedcer,
		freightDialogSCheckedRedcer:state.uiReducers.shelvesUiReducers.freightDialogSCheckedRedcer,
		willUploadPicture:state.commodityReducers.shelvesReducers.pictureUper.file,
		formTemporaryStorageReducer:state.commodityReducers.formDataTemporaryStorageReducer.formDataTemporaryStorageReducer,
		userName:state.userReducers.username,
		showCircularProgressReducer:state.uiReducers.showCircularProgress.show,
		formData:state.commodityReducers.updataCommodityReducers
	})
	
}

const mapDispatchProps = (dispatch) => {
	return({
		freightDialogShow:(show) => dispatch(freightDialogShow(show)),
		freightDialogSChecked:(name)=> dispatch(freightDialogSChecked(name)),
		formDataTemporaryStorage:(formKey, formValue) => dispatch(formDataTemporaryStorage(formKey, formValue)),
		formDataPost: (data) => dispatch(formPostAPI(data)),
		picturePost: (pictrue, data ,userName) => dispatch(picturePost(pictrue, data, userName)),
		showCircularProgress:(show)=> dispatch(showCircularProgress.isShowCircularProgress(show)),
		getCommodityOneUpdata:(id) => dispatch(getCommodityOneUpdata(id))
	})
}

export default connect(
	mapStateProps,
	mapDispatchProps
)(UpdataCommodityContainer);