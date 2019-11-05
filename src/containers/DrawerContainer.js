// import React from 'react';
import { connect } from 'react-redux';
import ButtonAppBar from '../App.js';
import { showDrawers, hideDrawers} from '../actions/uiActions.js';
import { reqLogOut } from '../actions/userAction.js';

// mapDispatchProps = (dispatch) => {
// 	return {
// 		toggleDrawer: (side, open) => event => {
// 		    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
// 		      return;
// 		    }
		    
// 	}

// }

// const [state, setState] = React.useState({
//     show: false
//   });
//  const toggleDrawer = (side, open) => event => {
// 	    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
// 	      return;
// 	    }

// 	    setState({ ...state, [side]: open });
// 	  }



	const mapStateToProps = (state) => ({
		show:state.uiReducers.menuBottonReducers.show,
		isAuthorized:state.userReducers.isAuthorzed,
		userName:state.userReducers.username
	})

	const mapDispatchProps = (dispatch) => ({	
		toggleDrawer: ()=>{		
			dispatch(showDrawers)		
				// dispatch(hideDrawers)
		},
		colseDrawer: ()=>{
			dispatch(hideDrawers)
		},
		logout: ()=>{
			dispatch(reqLogOut())
		}


	})
		
export default  connect(
	mapStateToProps,
	mapDispatchProps

)(ButtonAppBar)