import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles, Theme  } from '@material-ui/core/styles';


const styles = (theme:Theme) => ({
 	button: {
      margin: theme.spacing(1),
    },
    textField:{
    	width: 100
    }

  
});

function Count (props) {

	const { classes } =props;
	// console.log(props)
	return(
		<div style={{'display':'flex'}}>
			
		    
				<TextField
			        id="standard-number"
			        label=""
			        value={props.quantity[`${props.id}`]}
			        type=""
			        className={classes.textField}
			    />
		    
		    
		</div>
	)

	
}

export default withStyles(styles)(Count)