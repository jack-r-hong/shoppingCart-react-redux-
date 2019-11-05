import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';

import List from '@material-ui/core/List';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import Typography from '@material-ui/core/Typography';
import ClearIcon from '@material-ui/icons/Clear';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
    postion:'absolute',
    
  },
  drawer:{
  	postion:'relative',
	bottom:'50%'
  },
  bottom:{
  	height:'100px',
  }
});

export default function CartFreightDrawers (props){
	console.log(props);
	const classes = useStyles();
	const fullList = () => (

		
		<Box className={classes.fullList}>
		    <Box
		      
		      role="presentation"
		      onClick={()=>props.showFreightDrawers(false)}
		      onKeyDown={()=>props.showFreightDrawers(false)}

		      

		    >	
			    <Box display='flex' bgcolor="text.disabled">
			    	<Box mr='auto' >
			    		
			    	</Box>
					<Box mr='auto' >
			    		<Typography variant='h5' style={{'color': '#fff'}}>物流選項</Typography>
			    	</Box>
					<Box>
						<ClearIcon />
			    	</Box>
			    </Box>
		    	
		    	
		    	
			</Box>
			<div>
		      <List>
		        <ListItem button>
		            
		            <ListItemText primary={'7-11取貨付款60元'} />
		        </ListItem>
		        <ListItem button>
		            
		            <ListItemText primary={'全家、OK、萊爾富取貨付款 60 元'} />
		        </ListItem>
		        <ListItem button>
		            
		            <ListItemText primary={'7-11取貨 60 元'} />
		        </ListItem>
		        <ListItem button>
		            
		            <ListItemText primary={'郵寄寄送 120 元'} />
		        </ListItem>
		        <ListItem button>
		            
		            <ListItemText primary={'宅配/快遞 120 元'} />
		        </ListItem>
		        <ListItem button>
		            
		            <ListItemText primary={'貨到付款 120 元'} />
		        </ListItem>
		        <ListItem button>
		            
		            <ListItemText primary={'郵局快捷貨到付款 120 元'} />
		        </ListItem>
		      </List>
		      <div className={classes.bottom}>
		      </div>
		    </div>
	    </Box>
	  );
	return(
		<Drawer anchor="bottom" open={props.showCartFreightDrawers.show} className={classes.drawer} onClose={()=>props.showFreightDrawers(false)}>
	       {fullList('bottom') }
	    </Drawer>
	)
}