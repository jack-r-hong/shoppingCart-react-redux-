import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';

import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { connect } from 'react-redux';
import { closeLoginDialog } from '../../actions/loginDialog/loginDialogActions.js';
import { makeStyles } from '@material-ui/core/styles';
import { Formik } from 'formik';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { postLogin } from '../../actions/userAction.js'
import Grid from '@material-ui/core/Grid';

import Container from '@material-ui/core/Container';
import history from '../../routes/history.js';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
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
}));

function AlertDialog(props) {

  const classes = useStyles();
  console.log(props)
  return (
    <div>
      <Dialog
        open={props.show}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"請先登入繼續購物"}</DialogTitle>
        <DialogContent>
          
            <Formik
              initialValues={{ userName: '', passWord: '' }}
              validate={values => {
                let errors = {};
                if (!values.userName) {
                  errors.userName = 'Required';
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.userName)
                ) {
                  errors.userName = 'Invalid email address';
                }
                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                  props.postLogin(values);
                  props.closeLoginDialog()
                }, 400);
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
                    required
                    fullWidth
                    id="userName"
                    label="Email Address"
                    name="userName"
                    autoComplete="userName"
                    autoFocus
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.userName}
                  />
                  {errors.userName && touched.userName && errors.userName}
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="passWord"
                    label="Password"
                    type="passWord"
                    id="passWord"
                    autoComplete="current-password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.passWord}
                  />
                  {errors.passWord && touched.passWord && errors.passWord}

                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                  />
                  <Grid container>
                    <Grid item xs={4} >
                      <Container >
                        <Button onClick={props.closeLoginDialog} color="primary" variant="contained" className={classes.submit} >
                          取消
                        </Button>
                      </Container>
                    </Grid>

                    <Grid item xs={4}>
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        disabled={isSubmitting}
                      >
                       登入
                      </Button> 
                    </Grid>
                    <Grid item xs={4}>
                        <Typography onClick={() => history.push('/register')} variant="body1" className={classes.submit}>
                          如果沒有帳號請按此註冊
                        </Typography>                      
                    </Grid>                    

                  </Grid>
                </form>
              )}
            </Formik>
          <DialogContentText id="alert-dialog-description">          
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
const mapStateToProps = (state) => {
  
  return({
    show:state.uiReducers.loginDialogReducers.loginDialog

    
  })
}
const mapDispatchProps = dispatch => ({
  postLogin: (values) => {
    dispatch(postLogin(values))
    
  },
  closeLoginDialog:()=>dispatch(closeLoginDialog)
})

export default connect(
  mapStateToProps,
  mapDispatchProps
  // {closeLoginDialog}
  
)(AlertDialog)