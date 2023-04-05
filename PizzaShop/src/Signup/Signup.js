import {Visibility, VisibilityOff } from '@mui/icons-material';
import { Box, Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField} from '@mui/material'
import React, { useState } from 'react'
import { Outlet,Link, useNavigate } from 'react-router-dom';
import './Signup.css'

function Signup() {
//Redirect
    const navigate=useNavigate();

// Show Password
    const [showpw,setshowpw]=useState(false);
    const clickshowpassword =()=> setshowpw((show)=>!show)


// function

    const handleSubmit =(event) => {
        event.preventDefault();
        navigate("/")
    };
  return (
    <div>
        <Box >
            <div className="Outbox">
            <div className="Inbox">
            <h3>Signup</h3>
            <form  onSubmit={handleSubmit}>
                <TextField
                className="wid"
                type="email"
                label="Email"
                placeholder="Enter your email"
                required
                />
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
                    placeholder="Create Password"
                    />
                </FormControl>
                <br/><br/>
                <Button type="submit" variant="outlined">Sign up</Button>
                <br/><br/><br/>
                <p >Already a User?
                <Link to="/Login" underline="none">Login</Link></p>
                <Outlet/>
            </form>
            </div>
            </div>
        </Box>
    </div>
  )
}

export default Signup