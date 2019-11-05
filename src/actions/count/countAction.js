import { createAction } from 'redux-actions';

// export const increment = (target)=> ({
// 	type: 'INCREMENT',
// 	target: target	
// })

// export const decrement = (target)=> ({
// 	type: 'DECREMENT',
// 	target: target
// })


export const increment = createAction('INCREMENT',(target)=>target);
export const decrement = createAction('DECREMENT',(target)=>target);