import React from 'react';
import { connect } from 'react-redux';
import Commodity from '../../components/shoppingcart/Commodity.js';
import { selectTab } from '../../actions/CommodityUiActions.js';

const mapStateToProps = (state) => ({
	selectTab: state.commodityReducers.tabValue
})

const mapDispatchProps = dispatch => ({
	showpage: (select) => {
		// dispatch(selectNavigation)
		 dispatch(selectTab(select));
	}
})

export default connect(
	mapStateToProps,
	mapDispatchProps
) (Commodity)