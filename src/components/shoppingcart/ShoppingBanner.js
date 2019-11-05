import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import WatchIcon from '@material-ui/icons/Watch';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import HeadsetIcon from '@material-ui/icons/Headset';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import TimeToLeaveIcon from '@material-ui/icons/TimeToLeave';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles(theme => ({
  root: {
  	width: '100%',
    padding: theme.spacing(3, 2),
  },
  box:{
  	width: '100%'
  }
}));

export default function ShoppingBanner() {
  const classes = useStyles();

  return (
    <div>
		<Box bgcolor="secondary.main" color="primary.contrastText">
	  		<Typography variant="h5" className={'text-center'}>
		        今夏最夯
		    </Typography>
	  	</Box>
        <Paper className={classes.root}>
      	
        <Box display='flex' className={classes.box} >
	        <Box >
	        	<Container>
		        	<WatchIcon />
		        </Container>
	        	<Typography variant="h5">
		        		流行精品
		        </Typography>
	        </Box>
	        <Box >
	        	<Container>
		        	<ThumbUpIcon />
		        </Container>
	        	<Typography variant="h5">
		        		好物推薦
		        </Typography>

	        </Box>
	        <Box >
	        	<Container>
		        	<HeadsetIcon />
		        </Container>
	        	<Typography variant="h5">
		        		明星周邊
		        </Typography>
	        </Box>
	        <Box >
	        	<Container>
		        	<LocalMallIcon />
		        </Container>
	        	<Typography variant="h5">
		        		包包服飾
		        </Typography>
	        </Box>
	        <Box >
	        	<Container>
		        	<TimeToLeaveIcon />
		        </Container>
	        	<Typography variant="h5">
		        		汽車用品
		        </Typography>
	        </Box>

        </Box>
      </Paper>
    </div>
  );
}