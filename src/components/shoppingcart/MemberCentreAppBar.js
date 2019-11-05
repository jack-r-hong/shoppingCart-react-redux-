import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import IconButton from '@material-ui/core/IconButton';

import {  useDispatch  } from 'react-redux';
import { showUserDrawers } from '../../actions/uiActions.js';
import Avatar from '@material-ui/core/Avatar';
import PersonIcon from '@material-ui/icons/Person';
import ShoppingCartUserDrawers from './ShoppingCartUserDrawers.js';
import HomeIcon from '@material-ui/icons/Home';
import history from '../../routes/history.js';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

export default function MemberCentreAppBar(props) {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
              onClick={()=>history.push('/shop')}
            >
              <HomeIcon />
            </IconButton>
          <Typography variant="h6" className={classes.title}>
            {props.children}
          </Typography>

                {props.botton}
                <IconButton
                  edge="start"
                  className={classes.rightButton}
                  color="inherit"
                  aria-label="open drawer"
                  onClick={
                    ()=>dispatch(showUserDrawers(true))
                  }
                >
                
                  <Avatar className={classes.avatar}>
                    <PersonIcon />
                  </Avatar>
                </IconButton>
        </Toolbar>
      </AppBar>
      <ShoppingCartUserDrawers />
    </div>
  );
}