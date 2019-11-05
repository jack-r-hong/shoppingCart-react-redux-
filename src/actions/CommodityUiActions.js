import { createAction } from 'redux-actions';
export const selectTab = (select) =>({
	type: "SELECT_TAB",
	select
});

export const invalidateTab = (select) => ({
	type: "INVALIDATE_TAB",
	select
})

export const showFreightDrawers =createAction('SHOW_FREIGHT_DRAWERS',show=>show)