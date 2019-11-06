import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Chip from '@material-ui/core/Chip';
import DoneIcon from '@material-ui/icons/Done';
import { Formik } from 'formik';
import {useDispatch, useSelector} from 'react-redux';
import {validUserNameApi} from '../actions/userAction.js';
import CloseIcon from '@material-ui/icons/Close';


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
  tab:{
    marginTop: '25px'
  }
}));

const tabUserName =(errors,touched,userNameVaild,classes) => {
  if(!touched.userName){
    return
  }else if((errors.userName === '帳號不得空白' ) || (errors.userName === '錯誤的帳號格式') || !userNameVaild){
    return(
      <Chip
        icon={<CloseIcon />}
        label={errors.userName || "帳號名稱已被使用"}
        color="secondary"
        className={classes.tab}
      />        
    )
  }else{
    return(
      <Chip label="可以使用的帳號名稱" icon={<DoneIcon />} color="primary" variant="outlined" className={classes.tab}/>
    )
    

  }
}

const tabpasword = (errors,touched,classes) => {
  if(!touched.passWord){
    return
  }else if((errors.passWord === '密碼不得空白' ) || (errors.passWord === '密碼不得小於6個字元')){
    return(
    <Chip
      icon={<CloseIcon />}
      label={errors.passWord}
      color="secondary"
      className={classes.tab}
    />  

    )

  }else if(errors.userName){
    return
  }else{
    return(

      <Chip label="" icon={<DoneIcon />} color="primary" variant="outlined" className={classes.tab}/>
    )    
  }

}


                // !(errors.passWord === '密碼不得空白' ) && !(errors.passWord === '密碼不得小於6個字元')  && touched.passWord ?
                // <Chip label="" icon={<DoneIcon />} color="primary" variant="outlined" />
                // :
                // <Chip
                //   icon={<CloseIcon />}
                //   label={errors.passWord}
                //   color="secondary"
                // />  

export default function Register({postRegister, resetmessage}) {
  const classes = useStyles();
  // const { setmessage, resetmessage } = this.props;
  const dispatch = useDispatch()
  const userNameVaild =useSelector(state => state.uiReducers.registerUserNameValid.Valid)

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          註冊帳號
        </Typography>
        <Formik
          initialValues={{ userName: '', passWord: '' }}
          validate={values => {
            let errors = {};
            if (!values.userName) {
              errors.userName = '帳號不得空白';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.userName)
            ) {
              errors.userName = '錯誤的帳號格式';
            } else if(
              !values.passWord
            ){
              errors.passWord = '密碼不得空白';
            }else if(
              values.passWord.length < 6
            ){
              errors.passWord = '密碼不得小於6個字元';
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            if(userNameVaild){
              postRegister(values);
              setTimeout(() => {
                // alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
                
                alert(values.userName);
              }, 400);
            }else{
              alert('帳號名稱已被使用');
              setTimeout(() => {
                // alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
                
                
              }, 400);              
            }

          }}
        >
        {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            handleReset,
            isSubmitting,

            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit} className={classes.form} noValidate>
              <Grid container>
                <Grid item xs={12} sm={8}>
                   <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"

                    
                    autoComplete="email"
                    autoFocus

                    type="userName"
                    name="userName"
                    onChange={handleChange}
                    onBlur={
                      (e) => {
                        handleBlur(e);
                        dispatch(validUserNameApi(values.userName))
                        
                      }

                    }
                    value={values.userName}
                  />               
                </Grid>
                <Grid item xs={12} sm={1}>
                </Grid>
                <Grid item xs={12} sm={3}>
                  {
                    tabUserName(errors, touched,userNameVaild,classes)
                  }
                </Grid>                                
              </Grid>              





              { /*!(errors.userName === '帳號不得空白' ) && !(errors.userName === '錯誤的帳號格式') && userNameVaild ?
                <Chip label="可以使用的帳號名稱" icon={<DoneIcon />} color="primary" variant="outlined" />
                :
                <Chip
                  icon={<CloseIcon />}
                  label={errors.userName || "帳號名稱已被使用"}
                  color="secondary"
                /> */               
              }
              <Grid container>
                <Grid item xs={12} sm={8}>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="passWord"
                    label="passWord"
                    type="passWord"
                    id="passWord"
                    autoComplete="current-passWord"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  />           
                </Grid>
                <Grid item xs={12} sm={1}>
                </Grid>

                <Grid item xs={12} sm={3}>
                  { 
                    tabpasword(errors,touched,classes)              
                  }              

                </Grid>                                
              </Grid>    
              

              
                          

              <Container>
                <Box style={{display:'flex'}}>
                  <Box mr='auto'>
                    <Button
                      type="button"  
                      variant="contained"
                      color="primary"
                      className={classes.submit}
                      disabled={isSubmitting}
                      onClick={(e) =>{dispatch(resetmessage); handleReset(e)}}
                      
                    >
                      Reset
                    </Button>               
                  </Box>
                  <Box >
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      className={classes.submit}
                      disabled={isSubmitting}

                    >
                      Sign Up
                    </Button>               
                  </Box>                

                </Box>                

              </Container>


              
              


            </form>
          )}


          
        </Formik>  
      </div>
      <Box mt={8}>
       
      </Box>
    </Container>
  );
}