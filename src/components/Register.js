import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
// import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import { Formik } from 'formik';


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

export default function Register({postRegister, resetmessage}) {
  const classes = useStyles();
  // const { setmessage, resetmessage } = this.props;

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
              errors.userName = 'Required';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.userName)
            ) {
              errors.userName = 'Invalid email address';
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            
            postRegister(values);
            setTimeout(() => {
              // alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
              
              alert(values.userName);
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
            handleReset,
            isSubmitting,

            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit} className={classes.form} noValidate>
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
                label="passWord"
                type="passWord"
                id="passWord"
                autoComplete="current-passWord"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {errors.passWord && touched.passWord && errors.passWord}

              
              <Container>
                <Box style={{display:'flex'}}>
                  <Box mr='auto'>
                    <Button
                      type="button"  
                      variant="contained"
                      color="primary"
                      className={classes.submit}
                      disabled={isSubmitting}
                      onClick={resetmessage}
                      
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