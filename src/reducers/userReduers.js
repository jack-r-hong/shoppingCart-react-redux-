import { handleActions } from 'redux-actions';



import api from '../api/WebAPI.js'



const token = api.getCookie("username");
// const cookieAuth = api.getCookie("username");
const decoded = api.jwtVerify(token);
// const decodedAuth = api.jwtVerify(cookieAuth);

const inistate = (
{
	"isAuthorzed" : !!decoded.isAuthorzed && decoded.isAuthorzed,
	"username" : decoded.userName
})
const userReducers = handleActions({
	SET_MESSAGE :
	(state, action) => {
	 	return("The email was succesfully validated.")
	},
	RESET_MESSAGE :
	(state, action) => {
	 	return( "" )
	},
	"REQ_REGISTER" :(state, action) => {
	 	return( "" )
	},
	"RES_LOGIN" : (state, action) => {
	 	return( "" )
	},
	"REQ_AUTH" : (state, action) => {
	 	return( {...state, "isAuthorzed" : false} )
	},
	// 'COMPLETE_AUTH' : 
	"COMPLETE_AUTH" : (state, action) => {
	 	return({ 
	 		...state,
	 		"isAuthorzed" : true,
	 		"username" : action.username
	 	})
	},
	"RES_LOGOUT" : (state) => {
		return({
			...state,
			"isAuthorzed" : false,
			"username" : ""
		})
	}

}, inistate)


// const userReducers = (state = "", action) =>{
// 	switch (action.type) {
//     case 'SET_MESSAGE':
//       return("The email was succesfully validated.")
//     case 'RESET_MESSAGE':
//       return( "" )
//     default:
//       return state
//   }
// }



export default userReducers;
