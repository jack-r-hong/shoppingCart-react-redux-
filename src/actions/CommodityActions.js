import axios from 'axios';
import { merge } from "lodash";
import { createActions,createAction } from 'redux-actions';
import {axiosTaget} from '../constants/axiosTaget.js';

export const reqGetCommodity = {
	type:'REQ_GET_COMMODITY'
}

export const resGetCommodity = (payload) => ({
	type:'RES_GET_COMMODITY',
	payload
})

export const errGetCommodity = {
	type:'ERR_GET_COMMODITY'
}

export const getCommodityAll = () => dispatch => {
	dispatch(reqGetCommodity);
	axios.get('http://localhost:3003/commodity/getcommodity')
	.then(response => {
		dispatch(resGetCommodity(response.data));		
	}).catch((error) => {
		dispatch(errGetCommodity);
	});
}

export const reqGetCommodityOne = {
	type:'REQ_GET_COMMODITY_ONE'
}

export const resGetCommodityOne = (payload) => ({
	type:'RES_GET_COMMODITY_ONE',
	payload
})

export const errGetCommoditOne = {
	type:'ERR_GET_COMMODITY_ONE'
}

export const getCommodityOne = (id) => dispatch => {
	dispatch(reqGetCommodityOne);
	axios.post(axiosTaget+'/commodity/getcommodityid', {_id:id})
	.then(response => {
		console.log(response)
		dispatch(resGetCommodityOne(response.data));		
	}).catch((error) => {
		dispatch(errGetCommoditOne);
	});
}
 
export const addToShoppingCart = (id,name,price,productPicture)  => ({
	type:'ADD_TO_SHOPPINGCART',
	id: id,
	name:name,
	price:price,
	productPicture:productPicture
})

export const addToCart = (id,name,price,productPicture) => dispatch => {
	dispatch(addToShoppingCart(id,name,price,productPicture))
	const cartLS = localStorage.getItem('id');
	
	
	if(localStorage.getItem('id') && cartLS.indexOf(id) !== -1){	
			localStorage.setItem('quantity', 
				JSON.stringify(
					merge({}, JSON.parse(localStorage.getItem('quantity')) ,
						{
							[id]:JSON.parse(localStorage.getItem('quantity'))[id]+1
						}
					)
				)  
			)
			console.log(JSON.parse(localStorage.getItem('quantity')))
			return cartLS;
			}else if(!localStorage.getItem('content')){
				localStorage.setItem('id',[id])
				localStorage.setItem('content', 
					JSON.stringify({
						[id]:{
							id:id,
							name:name,
							price:price,
							productPicture:productPicture
						}
						
					})  
				);
				localStorage.setItem('quantity', 
					JSON.stringify({
						[id]:1
						
					})  
				);


				


			}else{
				localStorage.setItem('id',[...[localStorage.getItem('id')], id])

				localStorage.setItem('content',  
					JSON.stringify(
						merge({}, JSON.parse(localStorage.getItem('content')) ,
							{
								[id]:{
									id:id,
									name:name,
									price:price,
									productPicture:productPicture
								}

							}
						)
					)
				)
				
				localStorage.setItem('quantity', 
					JSON.stringify(
						merge({}, JSON.parse(localStorage.getItem('quantity')) ,
							{
								[id]:1
							}
						)
					)  
				)
				
					
			}
				
	
}

const reqGetCommodityId = {
	type:'REQ_GET_COMMODITY_ID'
}

export const resGetCommodityId = (payload) => ({
	type:'RES_GET_COMMODITY_ID',
	payload
})

export const getCommodityId = (id) => dispatch => {
	dispatch(reqGetCommodityId);
	resGetCommodityId();
}

export const getUserCommodity = createActions({
	'GET_USER_COMMODITY':{
		'REQUEST':()=>({}),
		'RESPONSE':(data)=>({data}),
		'ERROR':(err)=>({err})
	}
})

export const getUserCommodityApi = userName => dispatch => {
	dispatch(getUserCommodity.getUserCommodity.request())
	axios.post(axiosTaget+'/commodity/getcommodityuser', {userName:userName})
	.then(response => {
		console.log(response)
		dispatch(getUserCommodity.getUserCommodity.response(response.data));		
	}).catch((error) => {
		dispatch(getUserCommodity.getUserCommodity.error(error));
	});
	
}


const fromCartDelete = createAction('FROM_CART_DELETE',id=>({id}))

export const fromCartDeleteApi = id => dispatch => {
	dispatch(fromCartDelete(id))
	const localStorageId = localStorage.getItem('id').split(',');
	// console.log(localStorageId);
	const deleteID = localStorageId.filter((item) => item !== id  )
	// console.log(deleteID.toString());
	localStorage.setItem('id',deleteID.toString())
	// console.log(deleteID)
	const deleteContent = JSON.parse(localStorage.getItem('content'))
	// console.log(deleteContent);
	delete deleteContent[id]
	localStorage.setItem('content',JSON.stringify(deleteContent))
	const deleteQuantity = JSON.parse(localStorage.getItem('quantity'))
	delete deleteQuantity[id]
	localStorage.setItem('quantity',JSON.stringify(deleteQuantity))
	// console.log(deleteQuantity)
	

}
