import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import Grid from '@material-ui/core/Grid';
import history from '../../routes/history.js';
import CartfreightAppBar from '../../components/shoppingcart/cartFreightAppBar.js';
import CarFreightDrawers from '../../components/shoppingcart/cartFreightDrawers.js';




const useStyles = makeStyles(theme => ({
	appBar: {
	    top: 'auto',
	    bottom: 0,
	    zIndex: 3000,

  	},
  	button: {
  		width: '70%',
	   	margin: theme.spacing(1),
	},
	drawer:{
		postion:'absolute',
		width:'100px'
	},

}));

export default function CartBottomAppBar (props){
	console.log(props);
	const classes = useStyles();
	return(
		<div>
			
			 <AppBar position="fixed" color="primary" className={classes.appBar} style={{'display':'flex'}}>
			 {
			 	props.showCartFreightDrawers.show?
			 	''
			 	:
			 	<CartfreightAppBar  showFreightDrawers={props.showFreightDrawers}/>
			 }
			 	<CarFreightDrawers 
					showCartFreightDrawers={props.showCartFreightDrawers}
					showFreightDrawers={props.showFreightDrawers}
					className={classes.drawer}
				 />
			 
			 	<Grid container spacing={3} justify="space-between">
			 		<Grid item xs={6}>
			          <Typography variant='h5'>合計(不含運)</Typography>
			          <Typography variant='h4'>$ {props.total} 元</Typography>
			        </Grid>
			 		<Grid item xs={6} container justify="flex-end">	
			 			{props.isAuthorzed?
			 				<Button
						        variant="contained"
						        color='secondary'
						        className={classes.button}
						        onClick={()=>history.push('/orderconfirmation')}
						    >
						        <Typography variant='h5'>確認購買</Typography>
						    </Button>
			 				:
							<Button
						        variant="contained"
						        color='secondary'
						        className={classes.button}
						        onClick={props.showLoginDialog}
						    >
						        <Typography variant='subtitle1' noWrap={true}>確認購買</Typography>
						    </Button>
			 			}
						

			 		</Grid>
			 	
			     </Grid>
			     
			 </AppBar>
			 
		 </div>
	)
}