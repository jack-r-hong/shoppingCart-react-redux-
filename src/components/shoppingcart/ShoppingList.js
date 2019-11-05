import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

const ListItemContent = [
  {
    Text:'電腦、電子、周邊'
  },
  {
    Text:'手機、通訊'
  },
  {
    Text:'家電、影音周邊'
  },
  {
    Text:'交通工具'
  },
  {
    Text:'相機、攝影機'
  },
  {
    Text:'玩具、公仔'
  },
  {
    Text:'電玩、遊戲'
  },
  {
    Text:'生活、居家'
  },
  {
    Text:'男裝、配件、男鞋'
  },
  {
    Text:'運動、健身'
  },
  {
    Text:'休閒、旅遊'
  },
  {
    Text:'名產、食品'
  },
  {
    Text:'保養、彩妝'
  },
  {
    Text:'流行女裝、內睡衣'
  },
  {
    Text:'女性飾品、配件'
  },
  {
    Text:'女包、精品與女鞋'
  },

]

function ListItemMap(){
  return(
    ListItemContent.map((item) => {
      return(
        <ListItem button key={item.Text}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary={item.Text}/>
        </ListItem>        
      )
    })
  )
}

export default function SimpleList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Divider />
        <ListItemText primary="熱門特區" />
      <Divider />    
      <List component="nav" aria-label="main mailbox folders">
        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="購物金活動" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="免運費專區" />
        </ListItem>
      </List>
      <Divider />
        <ListItemText primary="分類目錄" />
      <Divider />
      <List component="nav" aria-label="secondary mailbox folders">
        {ListItemMap()}
      </List>
    </div>
  );
}