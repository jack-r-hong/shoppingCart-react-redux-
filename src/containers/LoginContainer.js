// import React from 'react';
import { connect } from 'react-redux';
import Login from '../components/Login.js';
import { postLogin } from '../actions/userAction.js'

// const mapStateProps = () => {
// 	return 
// }

const mapDispatchProps = dispatch => ({
	postLogin: (values) => {
		dispatch(postLogin(values))
		
	}
})

export default connect(
	null,
	mapDispatchProps
)(Login);
