import React from 'react';

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

import DialogTitle from '@material-ui/core/DialogTitle';
import clsx from 'clsx';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Formik } from 'formik';
import history from '../../routes/history.js';




const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),

    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  textField: {
    marginLeft: theme.spacing(0),
    marginRight: theme.spacing(0),
  },
  dense: {
    marginTop: theme.spacing(0),
  },
}));

export default function Shelves(props) {
	console.log(props)
  const classes = useStyles();
  async function asyncPost() {
  	await props.showCircularProgress(true)
  	await props.picturePost(props.willUploadPicture,props.formTemporaryStorageReducer,props.userName);
  	// await setTimeout(() => {
	  // 	 console.log(props.formTemporaryStorageReducer)
	  // 	 props.formDataPost(props.formTemporaryStorageReducer);		
  	// },400)
  	await props.showCircularProgress(false)
  	await history.push('/auctionlist');

  }
  return (
  	
    <Container component="main" maxWidth="xs">
    	<CssBaseline />

		<div className={classes.paper}>
	        <Typography component="h1" variant="h5">
	          商品上架
	        </Typography>

	        <Formik
	          initialValues={{
		          title: '', 
		          subName: '', 
		          price: '', 
		          inventory : '' , 
		          content : '',
		          'sevenElevenPickUpPayment' : '',
		          'pickUpPayment' : '',
		          'sevenElevenPickUp' : '',
		          'mailing': '',
		          'homeDelivery' : '',
	      	}}
	          validate={values => {
	            let errors = {};
	            if (!values.title) {
	              errors.title = 'Required';
	            } else {/*if (
	              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.title)
	            ) 
	              errors.name = 'Invalid email address';
	            */}
	            return errors;
	          }}
	          onSubmit={(values, { setSubmitting }) => {
	            setTimeout(() => {
	              // alert(JSON.stringify(values, null, 2));
	              asyncPost().then();
	              
	            }, 400);
				setSubmitting(true)
	          }}
	        >
	          {({
	            values,
	            errors,
	            touched,
	            handleChange,
	            handleBlur,
	            handleSubmit,
	            isSubmitting,
	            /* and other goodies */
	          }) => (
	            <form onSubmit={handleSubmit} className={classes.form} noValidate >
					
		              <TextField
		                variant="outlined"
		                margin="normal"
		                error={errors.title && touched.title && errors.title ? true:false}
		                required
		                fullWidth
		                id="title"
		                label="商品標題"
		                type="text"
		                name="title"
		                className={clsx(classes.textField)}
		                autoComplete="title"
		                autoFocus
		                onChange={ handleChange }
		                onBlur={
		                	(e) => {
			                 	handleBlur(e);
			                 	props.formDataTemporaryStorage('title',values.title)
	      					}
	      				}
		                value={values.title}
		              />
		              {/*errors.title && touched.title && errors.title*/}
		              <TextField
		                variant="outlined"
		                margin="normal"
		                required
		                fullWidth
		                name="subName"
		                label="商品副標題"
		                type="text"
		                id="subName"
		                className={clsx(classes.textField)}
		                autoComplete="current-password"
		                onChange={handleChange}
		                onBlur={
		                	(e) => {
			                 	handleBlur(e);
			                 	props.formDataTemporaryStorage('subName',values.subName)
	      					}
		                }
		                value={values.subName}
		              />
		              {errors.subName && touched.subName && errors.subName}
		              <TextField
		                variant="outlined"
		                margin="normal"
		                required
		                fullWidth
		                name="price"
		                label="價格"
		                type="number"
		                id="price"
		                className={clsx(classes.textField)}
		                autoComplete="current-password"
		                onChange={ handleChange}
		                onBlur={
							(e) => {
			                 	handleBlur(e);
			                 	props.formDataTemporaryStorage('price',values.price)
	      					}
		                }
		                value={values.price}
		              /> 
		               <TextField
		                variant="outlined"
		                margin="normal"
		                required
		                fullWidth
		                name="inventory"
		                label="庫存"
		                type="number"
		                id="inventory"
		                className={clsx(classes.textField)}
		                autoComplete="current-password"
		                onChange={handleChange}
		                onBlur={
		                	(e) => {
			                 	handleBlur(e);
			                 	props.formDataTemporaryStorage('inventory',values.inventory)
	      					}
		                }
		                value={values.inventory}
		              /> 
				      <TextField
				        id="content"
				        name="content"
				        label="商品介紹"
				        className={clsx(classes.textField)}
				        fullWidth
				        variant="outlined"
				        multiline
				        rows='6'
				        rowsMax="30"
		                onChange={handleChange}
		                onBlur={
		                	(e) => {
			                 	handleBlur(e);
			                 	props.formDataTemporaryStorage('content',values.content)
	      					}
		                }
		                value={values.content}		        
				      />       
				        <Button variant="outlined" color="primary" onClick={() => props.freightDialogShow(true)} fullWidth  className={clsx(classes.textField)}>
				        	運費設定
				        </Button>             
						<Dialog open={props.freightDialogRedcer.dialogShow} onClose={ () => props.freightDialogShow(false)} aria-labelledby="form-dialog-title">
					        <DialogTitle id="form-dialog-title">運費設定</DialogTitle>
					        <DialogContent>
							    <FormGroup row>
							      <FormControlLabel
							        control={
							        	<div>
							          <Checkbox checked={props.freightDialogSCheckedRedcer.checkedA} onChange={()=>props.freightDialogSChecked('checkedA')} value="checkedA" />
						               <TextField
						                variant="outlined"
						                margin="normal"
						                disabled={props.freightDialogSCheckedRedcer.checkedA?false:true}         
						                
						                name="sevenElevenPickUpPayment"
						                label="7-11取貨付款"
						                type="number"
						                id="sevenElevenPickUpPayment"
						                className={clsx(classes.dense)}
						                autoComplete="current-password"
						                onChange={handleChange}
						                onBlur={
						                	(e) => {
							                 	handleBlur(e);
							                 	props.formDataTemporaryStorage('sevenElevenPickUpPayment',values.sevenElevenPickUpPayment)
					      					}
						                }
						                value={values.sevenElevenPickUpPayment}
						              /> 
						              </div>								          
							        }
							      />
							    </FormGroup>
							    <FormGroup row>
							      <FormControlLabel
							        control={
							        	<div>
							          <Checkbox checked={props.freightDialogSCheckedRedcer.checkedB} onChange={()=>props.freightDialogSChecked('checkedB')} value="checkedB" />
						               <TextField
						                variant="outlined"
						                margin="normal"
						                disabled={props.freightDialogSCheckedRedcer.checkedB?false:true}  
						                
						                name="pickUpPayment"
						                label="全家或萊爾富取貨付款"
						                type="number"
						                id="pickUpPayment"
						                className={clsx(classes.dense)}
						                autoComplete="current-password"
						                onChange={handleChange}
						                onBlur={
						                	(e) => {
							                 	handleBlur(e);
							                 	props.formDataTemporaryStorage('pickUpPayment',values.pickUpPayment)
					      					}
						                }
						                value={values.pickUpPayment}
						              /> 
						              </div>								          
							        }
							      />
							    </FormGroup>
							    <FormGroup row>
							      <FormControlLabel
							        control={
							        	<div>
							          <Checkbox checked={props.freightDialogSCheckedRedcer.checkedC} onChange={()=>props.freightDialogSChecked('checkedC')} value="checkedC" />
						               <TextField
						                variant="outlined"
						                margin="normal"
						                disabled={props.freightDialogSCheckedRedcer.checkedC?false:true}  
						                
						                name="sevenElevenPickUp"
						                label="7-11取貨"
						                type="number"
						                id="sevenElevenPickUp"
						                className={clsx(classes.dense)}
						                autoComplete="current-password"
						                onChange={handleChange}
						                onBlur={
						                	(e) => {
							                 	handleBlur(e);
							                 	props.formDataTemporaryStorage('sevenElevenPickUp',values.sevenElevenPickUp)
					      					}						                	
						                }
						                value={values.sevenElevenPickUp}
						              /> 
						              </div>								          
							        }
							      />
							    </FormGroup> 	
							    <FormGroup row>
							      <FormControlLabel
							        control={
							        	<div>
							          <Checkbox checked={props.freightDialogSCheckedRedcer.checkedD} onChange={()=>props.freightDialogSChecked('checkedD')} value="checkedD" />
						               <TextField
						                variant="outlined"
						                margin="normal"
						                disabled={props.freightDialogSCheckedRedcer.checkedD?false:true}  
						                
						                name="mailing"
						                label="郵寄"
						                type="number"
						                id="mailing"
						                className={clsx(classes.dense)}
						                autoComplete="current-password"
						                onChange={handleChange}
						                onBlur={
						                	(e) => {
							                 	handleBlur(e);
							                 	props.formDataTemporaryStorage('mailing',values.mailing)
					      					}
						                }
						                value={values.mailing}
						              /> 
						              </div>								          
							        }
							      />
							    </FormGroup> 	
							    <FormGroup row>
							      <FormControlLabel
							        control={
							        	<div>
							          <Checkbox checked={props.freightDialogSCheckedRedcer.checkedE} onChange={()=>props.freightDialogSChecked('checkedE')} value="checkedE" />
						               <TextField
						                variant="outlined"
						                margin="normal"
						                disabled={props.freightDialogSCheckedRedcer.checkedE?false:true}  
						                
						                name="homeDelivery"
						                label="宅配"
						                type="number"
						                id="homeDelivery"
						                className={clsx(classes.dense)}
						                autoComplete="current-password"
						                onChange={handleChange}
						                onBlur={
						                	(e) => {
							                 	handleBlur(e);
							                 	props.formDataTemporaryStorage('homeDelivery',values.homeDelivery)
					      					}
						                }
						                value={values.homeDelivery}
						              /> 
						              </div>								          
							        }
							      />
							    </FormGroup> 								    							    							     								     				        
							</DialogContent>
					        <DialogActions>
					          <Button onClick={() => props.freightDialogShow(false)} color="primary">
					            取消
					          </Button>
					          <Button onClick={() => props.freightDialogShow(false)} color="primary">
					            保存設定
					          </Button>
					        </DialogActions>
					    </Dialog>
					    {props.children}

		              <Button
		                type="submit"
		                fullWidth
		                variant="contained"
		                color="primary"
		                className={classes.submit}
		                disabled={isSubmitting}
		              >
		               上架
		              </Button> 
		              
		            </form>
	          )}
	        </Formik>        
		</div>
    

    </Container>
  );
}