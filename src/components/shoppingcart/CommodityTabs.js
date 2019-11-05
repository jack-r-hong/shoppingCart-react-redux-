import React from 'react';
import { autoPlay } from 'react-swipeable-views-utils';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);










const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: '100%',
    height:'200px',
    flexGrow: 1,
  },
  action:{
    width:'40%',
    height: '30px',
    backgroundColor: '#333',
    color: '#fff',
    'textAlign' : 'center',
    'border' : 'solid 3px #000',
    'borderBottom' : 'solid 3px #333',


  },
  reaction:{
    width:'33.333%',
    height: '30px',
    backgroundColor: '#fff',
    color: '#000'  ,
    'textAlign' : 'center',

  },
  appbar:{
    height: '30px',
    display:'flex',
    
    
  },
  eventImage:{
    height:'100%',
    'backgroundPosition': "center center",
    'backgroundSize':'cover',
    'backgroundRepeat': 'no-repeat',
  },
  unEventImage:{
    height:0,
    'backgroundPosition': "center center",
    'backgroundSize':'cover',
    'backgroundRepeat': 'no-repeat',
  },
}));

export default function CommodityTabs(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  

  const mapEvent = [
    {
      imgUrl :'../../images/adorable-animal-animal-photography-1056251.jpg',
      label : '小灰貓'
    },
    {
      imgUrl :'../../images/bride-clouds-daylight-949224.jpg',
      label : '活動二'
    },   
    {
      imgUrl :'../../images/adorable-animal-cat-9413.jpg',
      label : '活動三'
    },   
  ]
  const timeer = () =>{
    
      setTimeout(()=>{
      if(value>3){
        setValue(0);
      }else{       
        setValue(value+1);
      }
    },4000)

  }



  return (
    <div className={classes.root}>
        
      <div className={classes.appbar}>

        {
          mapEvent.map((item,i) => {
            return(
              <div onMouseEnter ={() => setValue(i)} className={value===i ?classes.action:classes.reaction} key={item.label}>{item.label}</div>    
            )
          })
        }
         
      </div>
      <div>
        <div style={{'width' : '100%', height: 230, backgroundColor:'#333', padding:'10px'}}>
          
            {
              mapEvent.map((item,i) => {
                return(
                    <div key={item.imgUrl} style={{"backgroundImage": 'url('+item.imgUrl+')'}} className={value=== i ?classes.eventImage:classes.unEventImage} ></div>     
                )
              })
            }            
         

        </div>
      </div>
{/*
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >        
      </SwipeableViews>
*/}

    </div>
  );
}