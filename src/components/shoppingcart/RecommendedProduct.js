import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import Box from '@material-ui/core/Box';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Button from '@material-ui/core/Button'; 
import history from '../../routes/history.js';





const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: '100%',
    
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  Paper: {
    padding: theme.spacing(3, 2),
  },
}));

export default function RecommendedPreoduct(props) {
  const classes = useStyles();


  const data = props.commodityList[0]
  const dataCutUp1 = data && data.slice(0,3)
  const dataCutUp2 = data && data.slice(3,6)
  const dataCutUp3 = data && data.slice(6,9)

  const datamap1 = data && dataCutUp1.map((item) => {
    return(
                <GridListTile key={item._id} onClick={() => {history.push(`/commodity?${item._id}`)}}>
                  <img src={item.productPicture} alt={''} />
                  <GridListTileBar
                    title={item.title}
                    subtitle={<span>${item.price}</span>}
                    actionIcon={
                      <IconButton aria-label={`info about ${item.title}`} className={classes.icon}>
                        <InfoIcon />
                      </IconButton>
                    }
                  />
                </GridListTile>            
    )
      

  })
  const datamap2 = data && dataCutUp2.map((item) => {
    return(
                <GridListTile key={item._id} onClick={() => {history.push(`/commodity?${item._id}`)}}>
                  <img src={item.productPicture} alt={''} />
                  <GridListTileBar
                    title={item.title}
                    subtitle={<span>${item.price}</span>}
                    actionIcon={
                      <IconButton aria-label={`info about tile.title`} className={classes.icon}>
                        <InfoIcon />
                      </IconButton>
                    }
                  />
                </GridListTile>            
    )
      

  }) 

  const datamap3 = data && dataCutUp3.map((item) => {
    return(
                <GridListTile key={item._id} onClick={() => {history.push(`/commodity?${item._id}`)}}>
                  <img src={item.productPicture} alt={''} />
                  <GridListTileBar
                    title={item.title}
                    subtitle={<span>${item.price}</span>}
                    actionIcon={
                      <IconButton aria-label={`info about tile.title`} className={classes.icon}>
                        <InfoIcon />
                      </IconButton>
                    }
                  />
                </GridListTile>            
    )
      

  })   
  



  


  return (
    <div>
      <Paper className={classes.Paper}>

        <Grid container>
          <Grid item xs={12}> 
            <Box display="flex"> 
              <Box mr='auto'>
                <Chip label="Basic" variant="outlined" color="primary" className={'mb-3 mt-1'} />

              </Box> 
              <Box>
                 <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  size="small"
                  mb='3'
                  mt='1'
                >
                  更多
                  <ArrowForwardIosIcon/>
                </Button>
              </Box> 
            </Box> 
          </Grid>

          <Grid item xs={12}> 
            <div className={classes.root}>
            { data?
              <GridList cellHeight={150} className={classes.gridList} cols={3}>
                {/*
                <GridListTile>
                  <img src={'../../images/mother-cat-sleeping-on-sofa-bed.jpg'} alt={''} />
                  <GridListTileBar
                    title={''}
                    subtitle={<span>by: {'tile.author'}</span>}
                    actionIcon={
                      <IconButton aria-label={`info about tile.title`} className={classes.icon}>
                        <InfoIcon />
                      </IconButton>
                    }
                  />
                </GridListTile>
                <GridListTile>
                  <img src={'../../images/mother-cat-sleeping-on-sofa-bed.jpg'} alt={''} />
                  <GridListTileBar
                    title={''}
                    subtitle={<span>by: {'tile.author'}</span>}
                    actionIcon={
                      <IconButton aria-label={`info about tile.title`} className={classes.icon}>
                        <InfoIcon />
                      </IconButton>
                    }
                  />
                </GridListTile>
              */}

                {datamap1}
              </GridList>
              :
              ''


            }

            </div>     
          </Grid>
          <Grid item xs={12}> 
            <Box display="flex"> 
              <Box mr='auto'>
                <Chip label="Basic" variant="outlined" color="primary" className={'mb-3 mt-1'} />

              </Box> 
              <Box mt={1}>
                 <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  size="small"
                  mb='3'
                  
                >
                  更多
                  <ArrowForwardIosIcon/>
                </Button>
              </Box> 
            </Box> 
          </Grid>
          <Grid item xs={12}> 
            <div className={classes.root}>
            { data?
              <GridList cellHeight={150} className={classes.gridList} cols={3}>
                {/*
                <GridListTile>
                  <img src={'../../images/mother-cat-sleeping-on-sofa-bed.jpg'} alt={''} />
                  <GridListTileBar
                    title={''}
                    subtitle={<span>by: {'tile.author'}</span>}
                    actionIcon={
                      <IconButton aria-label={`info about tile.title`} className={classes.icon}>
                        <InfoIcon />
                      </IconButton>
                    }
                  />
                </GridListTile>
                <GridListTile>
                  <img src={'../../images/mother-cat-sleeping-on-sofa-bed.jpg'} alt={''} />
                  <GridListTileBar
                    title={''}
                    subtitle={<span>by: {'tile.author'}</span>}
                    actionIcon={
                      <IconButton aria-label={`info about tile.title`} className={classes.icon}>
                        <InfoIcon />
                      </IconButton>
                    }
                  />
                </GridListTile>
              */}

                {datamap2}
              </GridList>
              :
              ''


            }

            </div>     
          </Grid>          
          <Grid item xs={12}> 
            <Box display="flex"> 
              <Box mr='auto'>
                <Chip label="Basic" variant="outlined" color="primary" className={'mb-3 mt-1'} />

              </Box> 
              <Box mt={1}>
                 <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  size="small"
                  mb='3'
                  
                >
                  更多
                  <ArrowForwardIosIcon/>
                </Button>
              </Box> 
            </Box> 
          </Grid>
          <Grid item xs={12}> 
            <div className={classes.root}>
            { data?
              <GridList cellHeight={150} className={classes.gridList} cols={3}>
                {/*
                <GridListTile>
                  <img src={'../../images/mother-cat-sleeping-on-sofa-bed.jpg'} alt={''} />
                  <GridListTileBar
                    title={''}
                    subtitle={<span>by: {'tile.author'}</span>}
                    actionIcon={
                      <IconButton aria-label={`info about tile.title`} className={classes.icon}>
                        <InfoIcon />
                      </IconButton>
                    }
                  />
                </GridListTile>
                <GridListTile>
                  <img src={'../../images/mother-cat-sleeping-on-sofa-bed.jpg'} alt={''} />
                  <GridListTileBar
                    title={''}
                    subtitle={<span>by: {'tile.author'}</span>}
                    actionIcon={
                      <IconButton aria-label={`info about tile.title`} className={classes.icon}>
                        <InfoIcon />
                      </IconButton>
                    }
                  />
                </GridListTile>
              */}

                {datamap3}
              </GridList>
              :
              ''


            }

            </div>     
          </Grid>
          
          


        </Grid>
        
        
      </Paper>
    </div>
  );
}