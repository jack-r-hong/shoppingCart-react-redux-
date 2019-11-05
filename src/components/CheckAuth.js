import React from 'react';
import { connect } from 'react-redux';
import history from '../routes/history.js';

export default function requireAuthentication(Component, type) {
	class AuthenticatedComponent  extends React.Component {
		componentDidMount() {
	      this.checkAuth();
	    }
	    UNSAFE_componentWillMount(nextProps) {
	      this.checkAuth();
	    }
	    checkAuth() {
	      if(type === 'auth') {
	        if (!this.props.isAuthorzed) {	
	          // history.push('/home');
	        }        
	      } else {
	        if (this.props.isAuthorzed) {
	          history.push('/loginhome');
	        }                
	      }
	    }

	      render() {
		      return ( 
		        <div> 
		        {
		          (type === 'auth') ?
		          this.props.isAuthorzed === true ? <Component {...this.props } /> : null
		          : this.props.isAuthorzed === false ? <Component {...this.props } /> : null
		        } 
		        </div>
		      )
		    }
		  };

		const mapStateToProps = (state) => ({ 
		    isAuthorzed:state.userReducers.isAuthorzed,
		});
		return connect(mapStateToProps)(AuthenticatedComponent);





	
}