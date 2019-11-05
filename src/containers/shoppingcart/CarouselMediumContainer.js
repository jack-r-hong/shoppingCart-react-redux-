import React from 'react';
import { connect } from 'react-redux';
import CarouselMedium from '../../components/shoppingcart/CarouselMedium.js'


function CarouselMediumContainer () {

	return(
		<CarouselMedium>
		</CarouselMedium>
	)
}



export default connect()(CarouselMediumContainer);