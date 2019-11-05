import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';
import EjectIcon from '@material-ui/icons/Eject';




const useStyles = makeStyles(theme => ({
	appBar: {
	    margin: theme.spacing(1),
  	},
  	button: {
  		width: '70%',
	   	margin: theme.spacing(1),
	},
}));

export default function CarFreightAppBar(props){
	console.log(props)
	const classes = useStyles();
	return(
		<div>
			<AppBar position="relative" color="inherit"  style={{'display':'flex'}} onClick={()=>props.showFreightDrawers(true)}>
			 	<Box display="flex" className={classes.appBar}>
			 		<Box>
			 			<Typography variant='h5'>{'7-11取貨付款60元'}</Typography>
			 		</Box>
			 		<Box ml='auto'>
			 			<Typography variant='h5' >更多<EjectIcon /></Typography>
			 		</Box>
			 	</Box> 		 	    
			 </AppBar>
			
		</div>
		 
	)
}