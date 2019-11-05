import React,{ Component } from 'react';
import { connect } from 'react-redux';
import CarouselTop from '../../components/shoppingcart/CarouselTop.js'


class CarouselTopContainer extends Component  {
	

	render(){
		return(
			<CarouselTop
				commodityList={this.props.commodityList}

			>

			</CarouselTop>
		)

	}

}

const mapStateToProps = state => {
	return({
		commodityList:state.commodityReducers.commodityReducers
	})

}


export default connect(mapStateToProps)(CarouselTopContainer);