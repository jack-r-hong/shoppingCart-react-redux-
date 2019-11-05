import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
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
  
});

export default function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  const shoppingCart = React.forwardRef((props, ref) => (
    <Link innerRef={ref} to="/shop" {...props} />
  ));


  return (
  	<Container maxWidth="sm">
  		<Grid container spacing={3}>
  			<Grid item xs={6} >
	          <Card className={classes.card}>
				  <CardContent>
				    <Typography className={classes.title} color="textSecondary" gutterBottom>
				      範例一
				    </Typography>
				    <Typography variant="h5" component="h2">
				      購物車
				    </Typography>
				    <Typography className={classes.pos} color="textSecondary">	      
						shopping cart
				    </Typography>
				    <Typography variant="body2" component="p">
				      功能:實現加入商品與刪除商品以及輸出購物車訂單到資料庫
				      <br />
				      {''}
				    </Typography>
				  </CardContent>
				  <CardActions>
				    <Button color="inherit" component={shoppingCart}>前往</Button>
				  </CardActions>
				</Card>
	        </Grid>
	        <Grid item xs={6}>
	          <Card className={classes.card}>
				  <CardContent>
				    <Typography className={classes.title} color="textSecondary" gutterBottom>
				      Word of the Day
				    </Typography>
				    <Typography variant="h5" component="h2">
				      be
				      {bull}
				      nev
				      {bull}o{bull}
				      lent
				    </Typography>
				    <Typography className={classes.pos} color="textSecondary">
				      adjective
				    </Typography>
				    <Typography variant="body2" component="p">
				      well meaning and kindly.
				      <br />
				      {'"a benevolent smile"'}
				    </Typography>
				  </CardContent>
				  <CardActions>
				    <Button size="small">Learn More</Button>
				  </CardActions>
				</Card>
	        </Grid>

	        <Grid item xs={6}>
	          <Card className={classes.card}>
				  <CardContent>
				    <Typography className={classes.title} color="textSecondary" gutterBottom>
				      Word of the Day
				    </Typography>
				    <Typography variant="h5" component="h2">
				      be
				      {bull}
				      nev
				      {bull}o{bull}
				      lent
				    </Typography>
				    <Typography className={classes.pos} color="textSecondary">
				      adjective
				    </Typography>
				    <Typography variant="body2" component="p">
				      well meaning and kindly.
				      <br />
				      {'"a benevolent smile"'}
				    </Typography>
				  </CardContent>
				  <CardActions>
				    <Button size="small">Learn More</Button>
				  </CardActions>
				</Card>
	        </Grid>

	        <Grid item xs={6}>
	          <Card className={classes.card}>
				  <CardContent>
				    <Typography className={classes.title} color="textSecondary" gutterBottom>
				      Word of the Day
				    </Typography>
				    <Typography variant="h5" component="h2">
				      be
				      {bull}
				      nev
				      {bull}o{bull}
				      lent
				    </Typography>
				    <Typography className={classes.pos} color="textSecondary">
				      adjective
				    </Typography>
				    <Typography variant="body2" component="p">
				      well meaning and kindly.
				      <br />
				      {'"a benevolent smile"'}
				    </Typography>
				  </CardContent>
				  <CardActions>
				    <Button size="small">Learn More</Button>
				  </CardActions>
				</Card>
	        </Grid>
			
			 
		</Grid>
    </Container>

  );
}