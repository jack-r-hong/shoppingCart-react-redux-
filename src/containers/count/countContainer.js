import React, { Component } from 'react';
import { connect } from 'react-redux';
import Count from '../../components/count/count.js';
import { increment, decrement } from '../../actions/count/countAction.js';
import IconButton from '@material-ui/core/IconButton';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';




class CountConteainer extends Component {
	


	
	render(){
		// console.log(this.props)
		// console.log(localStorage.getItem('quantity'))
		return (
			<div style={{'display':'flex'}}>
				<IconButton variant="contained"  size="small" onClick={()=>this.props.decrement(this.props.id)}>
			       <ArrowLeftIcon/>
			    </IconButton>
				<Count 
					id={this.props.id}
					quantity={this.props.quantity}
				/>
				<IconButton variant="outlined"  size="small" onClick={()=>this.props.increment(this.props.id)}>
			       <ArrowRightIcon />
			    </IconButton>
			</div>
				
		)
	}
} 

const mapStateToProps = (state, ownProps) => {
	
	return({
		quantity:state.countReducers.count
	})
}

const mapDispatchProps = dispatch => ({
	increment:(id)=>dispatch(increment(id)),
	decrement:(id)=>dispatch(decrement(id))
})
export default connect (
	mapStateToProps,
	mapDispatchProps
)(CountConteainer)