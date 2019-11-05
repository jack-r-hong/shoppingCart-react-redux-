import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import CardActionArea from '@material-ui/core/CardActionArea';
import PropTypes from 'prop-types';
import {addToShoppingCart} from '../../actions/CommodityActions.js';


const styles = theme => ({
  card: {
    minWidth: 275,
    width: '250px',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  root: {
    flexGrow: 1,
  },
  media: {
    weight:0,
    paddingTop: '56.25%', // 16:9
    marginTop:'30'
  },
  
});





class shoppingCart extends Component {
	static propTypes = {
		classes: PropTypes.object.isRequired,
	}


	
	
	

	render() {
		const  { classes , name, subName, productPicture, price ,salesVolume , id} = this.props;
		const { to } = this.props;
		const commodityLink = React.forwardRef((props, ref) => (
			    <Link innerRef={ref} to={to}{...props} />
		));
		// const shoppingCartLink = () => {
		// 	alert(`${name}已加入購物車` );
		// 	addToShoppingCart("11");

		// }
		// console.log(this.props)
		
		return(
  			<Grid item xs={6} >
  			
	          <Card className={classes.card}>
	          	<CardActionArea component={commodityLink}>
				  <CardContent>
				    <Typography variant="h5" component="h2">
				      {name}
				    </Typography>
				    <Typography className={classes.pos} color="textSecondary">	      
						{subName}
				    </Typography>
				    <CardMedia	    	
				        className={classes.media}     
				        title="cat"
				        image={productPicture}
				    />
				    <Typography variant="h5" component="p">
				      ${price}
				      <br />
				      {''}
				    </Typography>
				  </CardContent>
				</CardActionArea>
				  <CardActions>
				  	<Typography className={classes.pos} color="textSecondary">	      
						銷售:{salesVolume}
				    </Typography>
				     {this.props.children}
				  </CardActions>
				</Card>

	        </Grid>	 
		)    
	}


}

// shoppingCart.propTypes = {
// 	classes: PropTypes.object.isRequired,
// }





export default withStyles(styles)(shoppingCart);

