import React from 'react';
import { connect } from 'react-redux';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchAppBar from '../../components/shoppingcart/ShoppingCartAppBar.js'
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
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
}));


function SearchAppBarContainer() {
	const classes = useStyles();
	return(
		<SearchAppBar>
			<div className={classes.search}>
	            <div className={classes.searchIcon}>
	              <SearchIcon />
	            </div>
	            <InputBase
	              placeholder="Search…"
	              classes={{
	                root: classes.inputRoot,
	                input: classes.inputInput,
	              }}
	              inputProps={{ 'aria-label': 'search' }}
	            />
	        </div>
		</SearchAppBar>
	)
}

export default connect()(SearchAppBarContainer);