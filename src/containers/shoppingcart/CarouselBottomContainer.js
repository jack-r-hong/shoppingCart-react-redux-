import React from 'react';
import { connect } from 'react-redux';
import CarouselBottom from '../../components/shoppingcart/CarouselBottom.js'


function CarouselBottomContainer () {

	return(
		<CarouselBottom>
		</CarouselBottom>
	)
}



export default connect()(CarouselBottomContainer);