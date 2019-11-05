import React from 'react';
import { connect } from 'react-redux';
import CartFreightAppBar from '../../components/shoppingcart/cartBottomAppBar.js';
import CarFreightDrawers from '../../components/shoppingcart/cartFreightDrawers.js';

function CartFreightAppBarContainer(){
	return(
		<div>
			<CartFreightAppBar />
			<CarFreightDrawers />
		</div>
	)

}

const mapStateToProps = (state) => ({
	
})

const mapDispatchProps = dispatch => ({
	
})

export default connect(
	
) (CartFreightAppBarContainer)