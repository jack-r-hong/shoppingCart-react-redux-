import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import AppBarContainer from './containers/DrawerContainer.js';
import RegisterContainer from './containers/RegisterContainer.js'

import * as serviceWorker from './serviceWorker';
import store from './store/index.js';
import LoginContainer from './containers/LoginContainer.js';
import history from './routes/history.js';
import UserData from './components/UserData.js';
import Main from './components/Main.js';
import HomePage from './components/HomePage.js';
import IsLoginHomePage from './components/IsLoginHomepage.js';
import CheckAuth from './components/CheckAuth.js';
import ShoppingCartContainer from './containers/shoppingcart/ShoppingCartContainer.js'
import CommodityContainer  from './containers/shoppingcart/CommodityContainer.js';
import OfficialWebsite from './components/OfficialWebsite/index.js'
import SingPage from './components/OfficialWebsite/singPage.js'
import cartContainer from './containers/shoppingcart/CartContainer.js';
import CommodityShelves from './components/UploadPicture/UploadPicture.js';
import ShelvesContainer from './containers/shoppingcart/ShelvesContainte.js';
import AuctionList from './components/shoppingcart/AuctionList.js';
import MemberCentre from './components/shoppingcart/MemberCentre.js';
import MessageCenter from './components/shoppingcart/MessageCenter.js';
import OrderConfirmation from './components/shoppingcart/OrderConfirmation.js';

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
		<Switch>
			<Route path="/home"  component={AppBarContainer} />			
				<Route path="/home/login"  component={LoginContainer} />
				<Route path="/register"  component={RegisterContainer} />
				<Route path="/home/userdata"  component={CheckAuth(UserData, 'auth')} />
				<Route path="/main"  component={Main} />
				<Route path="/home/home" component={HomePage} />
				<Route path="/home/loginhome"  component={CheckAuth(IsLoginHomePage, 'auth')} />
			
			<Route path="/shop"  component={ShoppingCartContainer} />
			<Route path="/commodity"  component={CommodityContainer} />
			<Route path="/cart"  component={cartContainer} />
			
			<Route path="/officialwebsite"  component={OfficialWebsite} />
			<Route path="/singpage"  component={SingPage} />
			<Route path="/commodityshelves"  component={CommodityShelves} />
			<Route path="/shelves"  component={ShelvesContainer} />
			<Route path="/auctionlist"  component={AuctionList} />
			<Route path="/membercentre"  component={MemberCentre} />
			<Route path="/messagecenter"  component={MessageCenter} />
			<Route path="/orderconfirmation"  component={OrderConfirmation} />

			<Redirect to='/shop'/>
		</Switch>







			
			
		</Router>
	</Provider>, 


	document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
