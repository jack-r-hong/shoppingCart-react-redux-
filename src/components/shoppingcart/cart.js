import React , { Component } from 'react';
import { withStyles, Theme  } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Count from '../../containers/count/countContainer.js';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';




const styles = (theme:Theme) => ({
 	card: {
 		padding: theme.spacing(1),
	     maxWidth: "100%",
	     display: 'flex',




	},
	media: {
	    height: 140,
	    width: 140,
	    

	},
	content: {
		display: 'flex',
		'align-items':'flex-start',
		'flex-direction':'row',
		'flex-wrap': 'nowrap',
		'justify-content': 'flex-start',
		position: 'relative'
	},
	grid: {
		padding: theme.spacing(1),
	},
	deleteIcon:{
		position: 'absolute',
		bottom:10,
		right:-20,
	}
  
});

class cart extends Component {
	

	render(){
		console.log(this.props)
		const { classes, name, price, productPicture ,id,itemTotal} = this.props;
		return(
			<Grid className={classes.grid}>
				<Card className={classes.card}>
			      <div className={classes.content}>

				        <CardMedia
				          className={classes.media}
				          image={productPicture}
				          title="Contemplative Reptile"
				        />

			        <CardContent>
			          <Typography gutterBottom variant="h5" component="h2">
			            {name}
			          </Typography>
			          <Typography variant="body2" color="textSecondary" component="p">
			            ${price}
			          </Typography>
			         
			        <Count id={id}/> 
			        	小計${itemTotal}

			        </CardContent>
			        	<IconButton className={classes.deleteIcon} onClick={() => this.props.deleteToCartApi(id)}>
			        		<DeleteIcon />	
			        	</IconButton>
					

			      </div>
			      <CardActions>
			        
			        
			      </CardActions>
			    </Card>
			</Grid>

		)
		
	}
}

export default withStyles(styles)(cart);