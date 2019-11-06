import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import { makeStyles  } from '@material-ui/core/styles';
import { getUserCommodityApi, deleteUserCommodityApi } from '../../actions/CommodityActions.js';
import { connect } from 'react-redux';
import AddIcon from '@material-ui/icons/Add';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import MemberCentreAppBar from './MemberCentreAppBar.js';


import  history  from '../../routes/history.js'

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
   	height: 140,

  },
  menuButton: {
      marginRight: theme.spacing(2),
    },

}));



function Commodity(props){
	const classes = useStyles()
	
	return(

  			<Grid item md={3} sm={5} xs={12} className="mr-2 mt-3">
  			
		        <Card className={classes.card}>
		          	<CardActionArea >
					  <CardContent>
					    <Typography variant="h5" component="h2">
					      {props.data[props._id].title}
					    </Typography>
					    <Typography className={classes.pos} color="textSecondary">	      
							{props.data[props._id].subName || '無名稱'}
					    </Typography>
					    <CardMedia	    	
					        className={classes.media}     
					        title="cat"
					        image={props.data[props._id].productPicture}
					        
					    />
					    
					    <Typography variant="h5" component="p">
					      ${props.data[props._id].price}
					      <br />
					      {''}
					    </Typography>
					  </CardContent>
					</CardActionArea>
					  <CardActions>
					  	<Typography className={classes.pos} color="textSecondary">	      
							銷售:{props.data[props._id].salesVolume}
					    </Typography>
					     {/*this.props.children*/}
				          <IconButton edge="start" className={'ml-auto mr-3'} color="inherit" aria-label="menu" onClick={() => history.push(`/updatacommodity?${props._id}`)}>
				            <EditIcon />
				          </IconButton>
				          <IconButton edge="start" className={'mr-3'} color="inherit" aria-label="menu" 
				          	onClick={
				          		() => {props.deleteUserCommodityApi(props._id)}
				          	}
				          >
				            <DeleteForeverIcon />
				          </IconButton>				          					     

					  </CardActions>
				</Card>

	        </Grid>		
	)
}

// function AuctionListAppBar(){
// 	const classes = useStyles();
//   return (
//     <div className={classes.root}>
//       <AppBar position="static">
//         <Toolbar>

//           <Typography variant="h6" className={classes.title}>
//             我的拍賣
//           </Typography>
          

//           <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={() => {history.push('/shelves')}}>
//             <AddIcon />
//           </IconButton>                    
//         </Toolbar>
//       </AppBar>
//     </div>
//   );	


// }

class AuctionList extends Component {
	

	componentDidMount() {
		// console.log(this.props)
		this.props.getUserCommodity(this.props.userName)
		
  	}


	


	render(){
	// console.log(this.props.commodityList[0] && Object.keys(this.props.commodityList[0]))	
	// console.log(
	// 	this.props.commodityList.map(
	// 		(item,i) => {
	// 			if(Object.keys(item)[0] === "5db9428cf917831cac6a5c92"){return null
	// 			}else{
	// 				return item
	// 			}

	// 		}
	// 	).filter(data => data !==null)
	// )
		return(
		
			
			<div>
				<MemberCentreAppBar
					botton={
			          <IconButton edge="start" className={'mr-3'} color="inherit" aria-label="menu" onClick={() => {history.push('/shelves')}}>
			            <AddIcon />
			            {'新增商品'}
			          </IconButton>     						
					}
				>
					我的拍賣
				</MemberCentreAppBar>
				<Container>
					<Grid container>
						{this.props.commodityList.map((item , i) => {
							return(
								<Commodity 
									data={item}
									key ={Object.keys(item)[0]}
									_id = {Object.keys(item)[0]}
									deleteUserCommodityApi={this.props.deleteUserCommodityApi}
								/>
							)

						})}	
					

					</Grid>
				</Container>



			</div>	
		)
	}
		
	
}

const mapStateTpProps = state => ({
	userName:state.userReducers.username,
	commodityList: state.commodityReducers.userAuctionCommodity
})

const mapDispatchProps = dispatch => ({
	getUserCommodity:(userName)=>dispatch(getUserCommodityApi(userName)),
	deleteUserCommodityApi: (id) => dispatch(deleteUserCommodityApi(id))
})

export default connect(
	mapStateTpProps,
	mapDispatchProps
)(AuctionList);