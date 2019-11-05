import React from 'react';


export default function userdata () {

	

	function getCookie(cname){
	  var name = cname + "=";
	  var ca = document.cookie.split(';');
	  for(var i=0; i<ca.length; i++) 
	  {
	    var c = ca[i].trim();
	    if (c.indexOf(name)===0) return c.substring(name.length,c.length);
	  }
	  return "";
	}

	const token = getCookie("username");
	// const  decoded  =  jwt.verify(token,"secret", function(err, decoded) {
	// 	aaa = decoded;
	// 	console.log(aaa);

		
	// })

	function decoded(token) {

		 
	}
	return(
		// <div onClick ={console.log(token)}>
		<div >1111
			<div>
				<button onClick={decoded(token)}>
					decode
				</button>
			</div>
				
			

		 </div>






		
		
	)
	
}
