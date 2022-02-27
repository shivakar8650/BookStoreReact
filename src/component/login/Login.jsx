import React from 'react'
import { Button, TextField } from '@material-ui/core';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import './login.scss';

function Login() {
    const [values, setValues] = React.useState({
        emailId: "",
        password: "",
        emailIdError: false,
        passwordError: false,
        showPassword: false
    })
    const changeFields = (e) => {
        setValues(previousvalues => {
            return { ...previousvalues, [e.target.name]: e.target.value }
        })
    }
    const validate = () => {
        let emailError = values.emailId === '' ? true : false
        let passworderror = values.password === '' ? true : false
        values((previousvalues) => {
            return { ...previousvalues, emailIdError: emailError, passwordError: passworderror }
        })
        return emailError || passworderror

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

    const login = () => {
        let isValidate = validate();
        if (!isValidate) {
            console.log(isValidate);
        }
    }

    return (<>
        <div className='login'>
            <div className='mail'>
                <TextField name="emailId" className="emailfield" size="small" type='text' id="outlined-email" label="Email Id" variant="outlined"
                    onChange={(e) => changeFields(e)} error={values.emailIdError} />
            </div>
            <div>
                <FormControl className="passwordfield" variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password" style={{marginBottom:'10px'}}>Password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        size="small"
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.password}
                        onChange={handleChange('password')}
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
            <br></br>
            <Button className='loginbutton' style={{ backgroundColor: '#A03037' }} onClick={() => login()}> Login </Button>
            <p className='mid'>OR</p>
            <div className='Buttons'>
                <div className='facebookbButton'>
                    <Button style={{ backgroundColor: '#4266B2' }} variant="contained">Facebook</Button>
                </div>
                <div className='googleButton'>
                    <Button variant="contained">Google</Button>
                </div>
            </div>
        </div>
    </>);
}

export default Login
