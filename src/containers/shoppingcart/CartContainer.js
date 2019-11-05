import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCommodityId,fromCartDeleteApi } from '../../actions/CommodityActions.js';
import Cart from '../../components/shoppingcart/cart.js';
import CartBottomAppBar from '../../components/shoppingcart/cartBottomAppBar.js';
import { getTotal, getItemTotal } from '../../reducers/index.js';
import LoginDialog from '../../components/shoppingcart/LoginDialog.js';
import { showLoginDialog } from '../../actions/loginDialog/loginDialogActions.js';
import { showFreightDrawers } from '../../actions/CommodityUiActions.js';



class cartContainer extends Component {

	// componentDidMount() {
		
		
	    
	    
	// }

	// componentDidUpdate(prevProps){
	// 	if(this.props.cart !== prevProps.cart){
	// 		this.getCommodityId()
	// 	}
	// }

		dataarry (){
			return(
				Object.keys(this.props.cart || "").map((item, i) => {

					
					return(
						<Cart 
							key={i}
							id={this.props.cart[item].id}
							name={this.props.cart[item].name}
							price={this.props.cart[item].price}
							productPicture={this.props.cart[item].productPicture}
							itemTotal={this.props.itemTotal[this.props.cart[item].id]}
							deleteToCartApi={this.props.fromCartDeleteApi}
						/>
					)
				})
			)

		} 


	
	render(){
		// console.log(this.props)
		const data = this.props.cart || "";
		// console.log(!!data)
		




		return(

			<div>

				{Object.keys(data).length ==0? '購物車裡沒有商品喔' :this.dataarry()}
				<div style={{height:'200px'}}>
					
				</div>
				<CartBottomAppBar 
					total={this.props.total}
					showLoginDialog={this.props.showLoginDialog}
					isAuthorzed={this.props.isAuthorzed}
					showCartFreightDrawers={this.props.showCartFreightDrawers}
					showFreightDrawers={this.props.showFreightDrawers}

				/>
				
				<LoginDialog/>
			</div>	

		)
	}

}

const mapStateToProps = (state, ownProps) => {
	
	return({
		cart:state.commodityReducers.cartContentReducers,
		total:getTotal(state),
		itemTotal: getItemTotal(state),
		isAuthorzed:state.userReducers.isAuthorzed,
		showCartFreightDrawers:state.uiReducers.showCartFreightDrawers,


		
	})
}

// const mapDispatchProps = dispatch => {
// 	getCommodityId:getCommodityId,
// 	showLoginDialog:showLoginDialog,
// 	showDrawers:showDrawers,
// 	hideDrawers:hideDrawers

// }

export default connect(
	mapStateToProps,
	{getCommodityId , showLoginDialog, showFreightDrawers, fromCartDeleteApi},

)(cartContainer);