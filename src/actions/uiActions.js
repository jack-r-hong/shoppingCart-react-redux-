import { createAction } from 'redux-action';

import { SHOW_DRAWERS, HIDE_DRAWERS } from '../constants/actionTypes.js';

// export const showDrawers = createAction(SHOW_DRAWERS);
// export const hideDrawers  = createAction(HIDE_DRAWERS);
export const showDrawers =  {
	type: SHOW_DRAWERS,
}
export const hideDrawers =  {
	type: HIDE_DRAWERS
}

export const showUserDrawers = createAction('SHOW_USER_DRAWERS',show=>show)