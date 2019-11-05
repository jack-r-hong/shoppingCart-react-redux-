import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import { fade, makeStyles } from '@material-ui/core/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ChatIcon from '@material-ui/icons/Chat';
import HomeIcon from '@material-ui/icons/Home';
import history from '../../routes/history.js';
import Avatar from '@material-ui/core/Avatar';
import PersonIcon from '@material-ui/icons/Person';
import { useSelector, useDispatch  } from 'react-redux';
import { showLoginDialog } from '../../actions/loginDialog/loginDialogActions.js'
import LoginDialog from '../../components/shoppingcart/LoginDialog.js';

import ShoppingCartUserDrawers from './ShoppingCartUserDrawers.js';
import { showUserDrawers } from '../../actions/uiActions.js';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
  rightButton: {
    marginLeft: theme.spacing(1),
  },
    appBar: {
      width:'100%',
      position: 'relative',
      
  },
    drawer: {
    width: '100%',
    flexShrink: 0,
  },
}));

export default function SearchAppBar(props) {
  const classes = useStyles();
  console.log(props)
  const isAuthorzed = useSelector(state => state.userReducers.isAuthorzed)
  const dispatch = useDispatch();

  return (
    <div className={classes.root}>
    <div className={classes.appBar}>
        <AppBar position="static" className={classes.appBar}>
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
            <Typography className={classes.title} variant="h6" noWrap>
              罐罐 
            </Typography>
            {props.children}
            {isAuthorzed?
              <div>
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
    



              </div>
                          
                :
               <IconButton
                edge="start"
                className={classes.rightButton}
                color="inherit"
                aria-label="open drawer"
                onClick={()=>dispatch(showLoginDialog())}
              >
                <Avatar className={classes.avatar}>
                  <PersonIcon />
                </Avatar>
              </IconButton>             
            }
          
            <IconButton
              edge="start"
              className={classes.rightButton}
              color="inherit"
              aria-label="open drawer"
              onClick={()=>history.push('/cart')}
            >
              <ShoppingCartIcon />
            </IconButton>

            <IconButton
              edge="start"
              className={classes.rightButton}
              color="inherit"
              aria-label="open drawer"
            >
              <ChatIcon />
            </IconButton>
          </Toolbar>
          
        </AppBar>      
    </div>
    <ShoppingCartUserDrawers className={classes.drawer}/>
      
      <LoginDialog />
        
      
     



    </div>
  );
}