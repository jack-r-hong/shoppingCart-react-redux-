import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Commodity from '../../components/shoppingcart/Commodity.js';
import { getCommodityOne, addToCart } from '../../actions/CommodityActions.js';


class CommodityContainer extends Component {
	static propTypes = {
		getCommodityOne: PropTypes.func.isRequired,
		 
	}


	componentDidMount() {
		
	    this.props.getCommodityOne(window.location.search.substr(1));
	    console.log(window.location.search.substr(1))
	    
	}

	render(){
		const data = this.props.commodityOne
		// console.log(data)
		
		return(

			<Commodity 
				commodityData={data}
				addToCart={addToCart}

			/>
		)
	}
}


const mapStateToProps = (state, ownProps) => {
	return({
		commodityOne:state.commodityReducers.commodityOneReducers
	})
}

const matDispatchProps = dispatch => {
	return({
		getCommodityOne:(data) =>dispatch(getCommodityOne(data)),
		addToCart:(_id,title,price,productPicture) => dispatch(addToCart(_id,title,price,productPicture))
	})
}


export default connect(
	mapStateToProps,
	matDispatchProps
	
	
)(CommodityContainer);