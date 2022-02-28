import React, { useState } from 'react'
import './signup.scss'
import { Button, TextField } from '@material-ui/core';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {UserService} from '../../Services/UserServices';

function Signup() {

    const [values, setValues] = React.useState({
        fullname:"",
        emailId:"",
        password:"",
        mobile:"",
        emailIdError: false,
        passwordError: false,
        showPassword: false,
        fullnameError:false,
        mobileError:false
    })

    const changeFields = (e) => {
        setValues(previousvalues => {
            console.log(e.target.value)
            return { ...previousvalues, [e.target.name]: e.target.value }
        })
    }
    const validate = () => {
        let fullnamerror = values.fullname === '' ? true : false
        let emailError = values.emailId === '' ? true : false
        let passworderror = values.password === '' ? true : false
        let mobilerror = values.mobile === '' ? true : false
        
        setValues((previousvalues) => {
        return { ...previousvalues, emailIdError: emailError, passwordError: passworderror, fullnameError: fullnamerror, mobileError: mobilerror }
    })
    return emailError || passworderror || fullnamerror || mobilerror;
    }
    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };
    const signup = () => {
        let isValidate = validate();
        if(!isValidate){
            let data={
                    "fullName": values.fullname,
                    "emailID": values.emailId,
                    "password": values.password,
                    "mobile": values.mobile
            }
            console.log(data);
            UserService.signup(data).then(( res)=>{
                console.log(res.data);   
                window.location.reload();   
            }).catch((err)=>{               
            })
        }
    }

    return (
        <>
            <div className='signup'>
                <div className='fullname'>
                    <TextField name="fullname" className="emailfield" size="small" type='text' id="outlined-email" label="fullname" variant="outlined"
                    onChange={(e) => changeFields(e)} error={values.fullnameError} />
                </div>
                <div className='Email'>
                    <TextField name="emailId" className="emailfield" size="small" type='text' id="outlined-email" label=" email Id" variant="outlined"
                    onChange={(e) => changeFields(e)} 
                    error={values.emailIdError}
                     />
                </div>
                <div>
                    <FormControl className="passwordfield" variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password" style={{ marginBottom: '10px' }}>Password</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            size="small"
                            type={values.showPassword ? 'text' : 'password'}
                            value={values.password}
                            onChange={(e) => changeFields(e)}
                            onChange={handleChange('password')}
                            error={values.passwordError}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Password"
                        />
                    </FormControl>
                </div>
                <div className='Mo_number'>
                <TextField name="mobile" className="emailfield" size="small" type='text' id="outlined-email" label="mobile" variant="outlined"
                onChange={(e) => changeFields(e)} error={values.mobileError} />
                </div>
                <div className='s-Button'>
                <Button className='signupbutton' style={{ backgroundColor: '#A03037' }} onClick={() => signup()}> Signup </Button>
                </div>
            </div>
        </>
    );
}

export default Signup
