import axios from 'axios';
import jwt from 'jsonwebtoken';

import { resRegister, errRegister, resLogin, errLogin } from '../actions/userAction.js'


export default {
	register: (values) => dispatch => {
		axios.post('http://localhost:3003/users/register',{
			values
		})
		.then(response =>{
			console.log(values)
			dispatch(resRegister)
		})
		.catch((err) => { console.error(err);dispatch(errRegister) }) ;
	},
	login: (values) => dispatch => {
		axios.post('http://localhost:3003/users/login',{
			values
		})
		.then(response =>{
			console.log(values)
			dispatch(resLogin)
			document.cookie="username=John Doe";
		})
		.catch((err) => { console.error(err);dispatch(errLogin) }) ;
	},
	getCookie:(cname) => {
	  var name = cname + "=";
	  var ca = document.cookie.split(';');
	  for(var i=0; i<ca.length; i++) 
	  {
	    var c = ca[i].trim();
	    if (c.indexOf(name)===0) return c.substring(name.length,c.length);
	  }
	  return "";
	},
	jwtVerify:(token) => {
		let decode = jwt.verify(token,"secret", function(err, decoded) {
			if(err) {
				return ("false")
			}else{
				return(decoded)	
			}
			
		})
		return decode
	}
}