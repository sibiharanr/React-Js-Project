import {Visibility, VisibilityOff } from '@mui/icons-material';
import { Box, Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput} from '@mui/material'
import React, { useState } from 'react'
import { Outlet, Link,useNavigate } from "react-router-dom";
import './Login.css'

function Login() {

// Redirect
    const navigate= useNavigate();


// States
    const [errormsg,setErrormsg]=useState({});

// Show Password
    const [showpw,setshowpw]=useState(false);
    const clickshowpassword =()=> setshowpw((show)=>!show)


// User Login Info
    const dataset = [
        {
            username:"project@gmail.com",
            pass:"project"
        }
    ];
    const errors = {
        ename:"Invalid Username",
        epass:"Invalid Password"
    };


// function

    const handleSubmit =(event) => {
        event.preventDefault();

        var {ename, epass } = document.forms[0];

        const userData = dataset.find((user)=> 
        user.username === ename.value);


        if(userData){
            if(userData.pass !== epass.value) {
                // Invalid Pw
                setErrormsg({name: "epass", message: errors.epass});
            } else {
                navigate("/");
            }
        } else {
            // Username not found
            setErrormsg({ name: "ename", message: errors.ename});
        }
    };

    const showerror = (name) =>
    name === errormsg.name && (<p style={{color:"red"}}>{errormsg.message}</p>);

  return (
    <div >
        <Box>
            <div className="Outbox">
            <div className="Inbox">
            <h3>Login</h3>
            <form  onSubmit={handleSubmit} >
                <FormControl className="wid">
                    <InputLabel>UserName</InputLabel>
                    <OutlinedInput
                    type="email"
                    label="UserName"
                    name="ename"
                    required
                    />
                    {showerror("ename")}
                </FormControl>
                <br/>
                <FormControl className="wid">
                    <InputLabel>Password</InputLabel>
                    <OutlinedInput
                    type={showpw ? 'text' : 'password'}
                    required
                    endAdornment={
                        <InputAdornment style={{marginRight:"-40px"}}>
                            <IconButton
                            onClick={clickshowpassword}
                            edge="end"
                            >
                            {showpw ? <VisibilityOff/> : <Visibility/>}
                            </IconButton>
                        </InputAdornment> 
                    }
                    label="Password"
                    name="epass"
                    />
                    {showerror("epass")}
                </FormControl>
                <br/><br/>
                <Button type="submit" variant="outlined">Login</Button>
                <br/><br/>
                <p >New Vistor ?
                <Link  to="/Signup" underline="none">Create an Account</Link></p>
                <Outlet/>
            </form>
            </div>
            </div>
        </Box>
    </div>
  )
}

export default Login