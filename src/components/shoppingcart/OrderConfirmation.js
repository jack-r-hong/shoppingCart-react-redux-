import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableFooter from '@material-ui/core/TableFooter';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { useSelector } from 'react-redux';
import history from '../../routes/history.js';

const useStyles = makeStyles({
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 200,
  },
  bar:{
    width:'100%',
    height:'60px',
    backgroundColor:'#0f0'
  }
});

function createData(name: string, calories: number, fat: number, carbs: number, protein: number) {
  return { name, calories, fat, carbs, protein };
}




export default function OrderConfirmation() {
  const classes = useStyles();
  const quantity =  useSelector(state => state.countReducers.count)
  const commodity =useSelector(state => state.commodityReducers.cartContentReducers)
  console.log(Object.keys(commodity))
  console.log(commodity)
  

  const tatal = 
    Object.keys(commodity).map(item =>
        commodity[item].price*quantity[item]       
    )
    
  ;

  console.log(tatal.reduce((a,b) => a+b))

  return (
    <Container>
      <Paper className={classes.root}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>商品名稱</TableCell>
              
              <TableCell align="right">單價</TableCell>
              <TableCell align="right">數量</TableCell>
              <TableCell align="right">小計</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.keys(commodity).map(item => (
              <TableRow key={item}>
                <TableCell component="th" scope="row">
                  {commodity[item].name}
                </TableCell>
                <TableCell align="right">{commodity[item].price}</TableCell>
                <TableCell align="right">{quantity[item]}</TableCell>
                <TableCell align="right">{commodity[item].price*quantity[item]}</TableCell>
              </TableRow>
            ))}
              <TableRow >

                <TableCell align="right">合計</TableCell>
                <TableCell align="right">{tatal.reduce((a,b) => a+b)}</TableCell>
                <TableCell align="right">運費</TableCell>
                <TableCell align="right">60</TableCell>
                <TableCell align="right">共</TableCell>
                <TableCell align="left">{tatal.reduce((a,b) => a+b) + 60}</TableCell>
              </TableRow>
          </TableBody>

        </Table>
      </Paper>
      <Container>
        <Grid container>
          <Grid item xs={6} style={{textAlign: 'center'}}>

            <Button onClick={() => history.push('/shop')}>
              繼續購物
            </Button>        
          </Grid>
          <Grid item xs={6}  style={{textAlign: 'center'}}>
            <Button onClick={() => history.push('/membercentre')}>
              會員中心
            </Button>          
          </Grid>                
        </Grid>
  
      </Container>



        

    </Container>

  );
}