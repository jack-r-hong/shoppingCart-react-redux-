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
    flexGrow: 1,
  },
  tab:{
    width:'20%'
  },
  action:{
    width:'20%',
    height: '30px',
    backgroundColor: '#333',
    color: '#fff',
    'textAlign' : 'center',



  },
  reaction:{
    width:'20%',
    height: '30px',
    backgroundColor: '#fff',
    color: '#000'  ,
    'textAlign' : 'center',

  },
  appbar:{
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

export default function ShopEventTabs() {
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
    {
      imgUrl :'../../images/mother-cat-sleeping-on-sofa-bed.jpg',
      label : '活動四'
    },  
    {
      imgUrl :'../../images/beach-bride-clouds-931796.jpg',
      label : '活動五'
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
        <div style={{'width' : '100%', height: 400, backgroundColor:'#333', padding:'10px'}}>
          
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