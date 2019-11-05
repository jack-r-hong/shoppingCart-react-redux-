import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';

import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import PersonIcon from '@material-ui/icons/Person';
import { reqLogOut } from '../../actions/userAction.js';
import history from '../../routes/history.js';



import Box from '@material-ui/core/Box';
import { useSelector, useDispatch  } from 'react-redux';
import { showUserDrawers } from '../../actions/uiActions.js';


const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
  	height: '50%',
    width: '100px',
    
  },
  drawer:{
  	
  	postion:'relative',
	bottom:'50%',
  },
  bottom:{
  	height:'100px',
  },
  top:{
  	height:'64px',
  },
  avatar:{
  	margin: 'auto',
  }
});

export default function ShoppingCartUserDrawers (props){
	// console.log(props);
	const classes = useStyles();
	const showDrawer = useSelector(state=>state.uiReducers.showUserDrawers.show)
	const userName = useSelector(state => state.userReducers.username)
	const dispatch = useDispatch()
	const fullList = () => (

		
		<Box className={classes.fullList}>
		    <Box	      
		      role="presentation"
		      onClick={()=>dispatch(showUserDrawers(false))}
		      onKeyDown={()=>dispatch(showUserDrawers(false))}
		    >	
			    <Box  bgcolor="primary.main" className={classes.top}>
				<div className={'text-center pt-2'}>
	                <Avatar className={classes.avatar}>
	                    <PersonIcon />
	                </Avatar>	                			
				</div>
               			    
			    </Box>
		    		    	
			</Box>
			<div>
		      <List className={classes.list}>
	            <ListItemText primary={ `您好, ${userName}`} />		      
		        <ListItem button>		            
		            <ListItemText primary={'會員中心'} onClick={() => {
		            	history.push('/membercentre');
		            	dispatch(showUserDrawers(false));
		            }
		        }/>
		        </ListItem>	
		        <ListItem button>		            
		            <ListItemText primary={'購物車'} onClick={() => {
		            	history.push('/cart');
		            	dispatch(showUserDrawers(false));
		            }
		            } />
		        </ListItem>		        		        	        
		        <ListItem button>		            
		            <ListItemText primary={'我的拍賣'} onClick={() =>{	            	
		            		history.push('/auctionlist') ;
							dispatch(showUserDrawers(false));
		            }  }/>
		        </ListItem>	
		        <ListItem button>		            
		            <ListItemText primary={'追蹤商品'} onClick={() => {
		            	history.push('/messagecenter');
		            	dispatch(showUserDrawers(false));
		            }
		        }/>
		        </ListItem>
		        <ListItem button>		            
		            <ListItemText primary={'訊息中心'} onClick={() => {
		            	history.push('/messagecenter');
		            	dispatch(showUserDrawers(false));
		            }
		        }/>
		        </ListItem>			        			        
		        <Divider />
		        <ListItem button onClick={() => {
		        	dispatch(reqLogOut());
		        	dispatch(showUserDrawers(false));
		        }}>		            
		            <ListItemText primary={'登出'} />
		        </ListItem>			        	        		        
		      </List>
		      <div className={classes.bottom}>
		      </div>
		    </div>
	    </Box>
	  );
	return(
		<Drawer anchor="right" open={showDrawer} className={classes.drawer} onClose={()=>dispatch(showUserDrawers(false))} width="50%">
	       {fullList('top') }
	    </Drawer>
	)
}