import React from 'react';
import { makeStyles, useTheme  } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import Grid from '@material-ui/core/Grid';

import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';



import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import SwipeableViews from 'react-swipeable-views';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';
import { addToCart } from '../../actions/CommodityActions.js';




const useStyles = makeStyles(theme=>({
  card: {
    minWidth: 275,
    width: '100%',
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
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  paper: {
  	padding: theme.spacing(3, 2),
  	width:"100%"
  },
  tab: {
  	backgroundColor: theme.palette.background.paper,
    width: "100%",
  }

  
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}




export default function SimpleCard(props) {
  const classes = useStyles();

  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  console.log(props)

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  
  // console.log(props);

  
  const {title, subName, productPicture, price ,salesVolume, content, freight, _id} = props.commodityData;


	console.log(freight && freight.sevenElevenPickUpPayment)
  
	const freightRange = () => {
		let selectArray = []
		for( let i in freight){
			if(!!freight[i]){
				selectArray.push(freight[i])
			}
		}

		return [ selectArray.sort()[0]  ,selectArray.sort()[selectArray.length - 1]]
	}
	const dispatch =useDispatch()
	

  return (

  	<Container maxWidth="sm">
  		
  		<Grid container>	
	          <Card className={classes.card}>
				  <CardContent>
				    <Typography variant="h5" component="h2">
				      {title}
				    </Typography>
				    <Typography className={classes.pos} color="textSecondary">	      
						{subName}
				    </Typography>
				    <CardMedia	    	
				        className={classes.media}     
				        title="cat"
				        image={productPicture || "null"}
				    />
				    <Typography variant="h5" component="p">
				      ${price}
				      <br />
				      {''}
				    </Typography>
				  </CardContent>
				 
				  <CardActions>
				  	<Typography className={classes.pos} color="textSecondary">	      
						銷售:{salesVolume}
				    </Typography>
					<IconButton onClick={() =>{dispatch(addToCart(_id,title,price,productPicture));alert(`以新增　${title}　至購物車`);console.log(localStorage.getItem('id'))}}>
					    <ShoppingCartIcon>
		 				  	shop
						</ShoppingCartIcon>
		 			</IconButton>
				  </CardActions>
				</Card>

				<div className={classes.root}>
			      <ExpansionPanel>
			        <ExpansionPanelSummary
			          expandIcon={<ExpandMoreIcon />}
			          aria-controls="panel1a-content"
			          id="panel1a-header"
			        >
			          <Typography className={classes.heading}>運費 NT${`${freightRange()[0]}`} ~ NT${`${freightRange()[1]}`}</Typography>
			        </ExpansionPanelSummary>
			        <ExpansionPanelDetails>
			          <Typography>
						{freight && freight.sevenElevenPickUpPayment && `7-11取貨付款: ${freight.sevenElevenPickUpPayment} 元`}
						{freight && freight.sevenElevenPickUp && `7-11取貨: ${freight.sevenElevenPickUp} 元`}
						{freight && freight.pickUpPayment && `全家或萊爾富取貨付款: ${freight.pickUpPayment} 元`}
						{freight && freight.mailing && `郵寄: ${freight.mailing} 元`}
						{freight && freight.homeDelivery && `宅配: ${freight.homeDelivery} 元`}
			          </Typography>
			        </ExpansionPanelDetails>
			      </ExpansionPanel>
			      <ExpansionPanel>
			        <ExpansionPanelSummary
			          expandIcon={<ExpandMoreIcon />}
			          aria-controls="panel2a-content"
			          id="panel2a-header"
			        >
			          <Typography className={classes.heading}>付款</Typography>
			        </ExpansionPanelSummary>
			        <ExpansionPanelDetails>
			          <Typography>
			            {"7-11取貨付款"}
			          </Typography>
			        </ExpansionPanelDetails>
			      </ExpansionPanel>
			      
			    </div>
			    <div className={classes.tab}>
			      <AppBar position="static" color="default">
			        <Tabs
			          value={value}
			          onChange={handleChange}
			          indicatorColor="primary"
			          textColor="primary"
			          variant="fullWidth"
			          aria-label="full width tabs example"
			        >
			          <Tab label="商品介紹" {...a11yProps(0)} />
			          <Tab label="問與答" {...a11yProps(1)} />
			          <Tab label="購買人次" {...a11yProps(2)} />
			          
			        </Tabs>
			      </AppBar>
			      <SwipeableViews
			        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
			        index={value}
			        onChangeIndex={handleChangeIndex}
			      >
			        <TabPanel value={value} index={0} dir={theme.direction}>
			          {content}
			        </TabPanel>
			        <TabPanel value={value} index={1} dir={theme.direction}>
			          Item Two
			        </TabPanel>
			        <TabPanel value={value} index={2} dir={theme.direction}>
			          Item Three
			        </TabPanel>

			      </SwipeableViews>
			    </div>
	        
		</Grid>
    </Container>

  );
}