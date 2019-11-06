import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
// import ShoppingCart from '../../components/shoppingcart/ShoppingCart.js';
import { getCommodityAll, addToCart } from '../../actions/CommodityActions.js'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
// import IconButton from '@material-ui/core/IconButton';
// import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SearchAppBarContainer from './ShoppingCartAppBarContainer.js';
import ShopEventTabs from '../../components/shoppingcart/ShopEventTabs.js';
import ScrollCommodity from '../../components/shoppingcart/ScrollCommodity.js';
import ScrollCommodityXs from '../../components/shoppingcart/ScrollCommodityXS.js';
import CommodityTabs from '../../components/shoppingcart/CommodityTabs.js';
import PopularSearch from '../../components/shoppingcart/PopularSearchList.js';
import Box from '@material-ui/core/Box';


import ShoppingList from '../../components/shoppingcart/ShoppingList.js';
import ShoppingBanner from '../../components/shoppingcart/ShoppingBanner.js';
import RecommendedPreoduct from '../../components//shoppingcart/RecommendedProduct.js'
import Hidden from '@material-ui/core/Hidden';




class shoppingCartContainer extends Component {


	static propTypes = {
		getCommodityAll: PropTypes.func.isRequired,
		 
	}

	componentDidMount() {
		
	    this.props.getCommodityAll();
	    // console.log(localStorage.getItem('id').split(',').map((item, i)=>item))
	     
	}


	render() {
		
		const data = this.props.commodityList[0]
		const dataCutUp1 = data && data.slice(0,3)
		const dataCutUp2 = data && data.slice(3,6)
  		const dataCutUp3 = data && data.slice(6,9)
  		const dataCutUp4 = data && data.slice(9,12)
  		const dataCutUp5 = data && data.slice(12,15)
  		const dataCutUp6 = data && data.slice(15,18)
  		const dataCutUp7 = data && data.slice(18,21)
  		
		console.log(dataCutUp7)
		// const data = this.props.commodityList;
		// const dataarry = Object.keys(data).map((item, i) => {

			
		// 	return(
			

		// 		<ShoppingCart 
		// 			key={i}
		// 			id={data[item]._id}
		// 			name={data[item].name}
		// 			subName={data[item].subName}
		// 			productPicture={data[item].productPicture}
		// 			price={data[item].price}
		// 			salesVolume={data[item].salesVolume}
		// 			to={`commodity/?_id=${data[item]._id}`}
		// 			>
		// 			<IconButton onClick={() =>{this.props.addToCart(data[item]._id,data[item].name,data[item].price,data[item].productPicture);alert(`以新增　${data[item].name}　至購物車`)}}>
		// 			    <ShoppingCartIcon>
		// 				  	shop
		// 				</ShoppingCartIcon>
		// 			</IconButton>
		// 		</ShoppingCart>
		
				


		// 	)
		// });
		// console.log(localStorage.getItem('content'))
		// console.log(localStorage.getItem('id'))
		// console.log(JSON.parse(localStorage.getItem('content')))
		// console.log(localStorage.getItem('quantity'))
		// console.log(JSON.parse('{"5d9c3e43cec21e1710c73473":{"id":"5d9c3e43cec21e1710c73473","name":"商品測試","price":100,"productPicture":"../../images/mother-cat-sleeping-on-sofa-bed.jpg"}}'))
		// localStorage.removeItem("content")
		// localStorage.removeItem("id")
		// localStorage.removeItem("productPicture")
		// localStorage.removeItem("name")
		// localStorage.removeItem("quantity")

		// console.log(localStorage.getItem('id').split(','))
		// console.log(this.props.cart)
		// Object.keys(localStorage.getItem('id').split(',')).map((item, i)=> {
		// 	console.log({[localStorage.getItem('id').split(',').keys]:[]})
		// 	console.log(i)
		// })
		// localStorage.getItem('id').split(',').map((item, i)=>console.log({[item]:i}))
		
		
		
		

		
		return(


			<div style={{'backgroundColor':'#ccc'}}>
				<SearchAppBarContainer />
				<Container>
					<Grid container spacing={1} className={'mt-1'}>
						<Hidden smDown>
							<Grid item md={2} sm={12}>			            
									<ShoppingList />
					        </Grid>
				        </Hidden>
				        <Grid item md={10} sm={12}>
					        <Grid container spacing={1}>
					        	<Grid item md={6} sm={12} xs={12} >
						        	<Box >
						        		<ShopEventTabs />	
						        	</Box>						        		
						        	<Box mt={2}>
										<RecommendedPreoduct 
											commodityList={this.props.commodityList}
										/>									        			
						        	</Box>										
						
					        	</Grid>
					        	<Hidden smDown>
						        	<Grid item md={3} sm={6}>
							        	<Box>
							        		<CommodityTabs 
												data={dataCutUp4}
							        		/>	
							        	</Box>
							        	<Box mt={10}>
							        		<CommodityTabs data={dataCutUp1}/>	
							        	</Box>	
							        	<Box mt={10}>
							        		<CommodityTabs data={dataCutUp2}/>	
							        	</Box>	
							        	<Box mt={10}>
							        		<CommodityTabs data={dataCutUp3}/>	
							        	</Box>								        										        						        											
						        	</Grid>
	
						        	<Grid item md={3} sm={6}>
							        	<Box>
							        		<CommodityTabs data={dataCutUp5}/>	
							        	</Box>
							        	<Box mt={10}>
							        		<CommodityTabs data={dataCutUp6}/>	
							        	</Box>	
							        	<Box mt={10}>
							        		<CommodityTabs data={dataCutUp4}/>	
							        	</Box>	
							        	<Box mt={10}>
							        		<CommodityTabs data={dataCutUp7}/>	
							        	</Box>								        										        						        											
						        	</Grid>

					        	</Hidden>
					        	<Hidden mdUp>
						        	<Grid item md={6} sm={12} xs={12} >
										<ShoppingBanner />
						        	</Grid>

						        	
					        	</Hidden>
					        	<Hidden mdUp>
						        	<Grid item md={12} xs={12}>
						        		<ScrollCommodityXs commodityList={this.props.commodityList}></ScrollCommodityXs>
						        	</Grid>
					        	</Hidden>
					        	<Grid item md={6} sm={12}>
										
					        	</Grid>

					        	<Hidden smDown>
						        	<Grid item md={10} xs={12}>
							        	<Box>
							        		<ScrollCommodity commodityList={this.props.commodityList}></ScrollCommodity>	
							        	</Box>
							        	<Box mt={2}>
											<RecommendedPreoduct 
												commodityList={this.props.commodityList}
											/>		
							        	</Box>						        		

						        		
						        	</Grid>
						        	<Grid item md={2} xs={12}>
						        		<PopularSearch />
						        	</Grid>


					        	</Hidden>
					        	<Hidden mdUp>
									<RecommendedPreoduct 
										commodityList={this.props.commodityList}
									/>							        	
					        	</Hidden>					        	
			        	
						        
					         </Grid> 
			          
			        </Grid>
						

						
					 </Grid>

					<Container maxWidth="sm">	
			  			<Grid container>
			  				{/*dataarry*/}
						</Grid>
					
					</Container>					

					
				</Container>

				

			</div>
		)
	}  

}

const mapStateToProps = (state, ownProps) => {
	
	return({
		commodityList:state.commodityReducers.commodityReducers,
		cart:state.commodityReducers.shoppingCartContentReducers
	})
}





export default connect(
	mapStateToProps,
	{getCommodityAll, addToCart},



	
	
)(shoppingCartContainer);