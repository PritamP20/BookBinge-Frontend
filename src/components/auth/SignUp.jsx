import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Login from './Login';

const SignUp = ({handleCloseLogin}) => {
    const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [phone, setPhone] = useState()
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const navigate = useNavigate()

  const handleClose = (data) => {
    handleCloseLogin()
    setOpen(false);
    setErrorMessage('');

  };

  const handleLogin = (e)=>{
    e.preventDefault()
  }

  const handleSignUp = async () => {
    if (password==confirmPassword) {
      const data = {
        "name":name,
        "email":email,
        "password":password,
        "phoneNo":phone
      }
      const user = await axios.post('https://bookbinge-backend.onrender.com/auth/signup', data)
      const token = user.data.token
      localStorage.setItem("token", token)
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      handleClose(data)

    }else{
      alert("Password do not match")
    }
  };

  return (
    <div>
      {/* <Button variant="outlined" className='bg-danger text-white' onClick={handleClickOpen}> */}
      <Button onClick={handleClickOpen}>
        Sign Up
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="sign-up-dialog-title"
      >
        {/* <DialogTitle id="sign-up-dialog-title">Sign Up</DialogTitle> */}
        <DialogTitle id="sign-up-dialog-title">Create Account</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Name"
            type="text"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Email"
            type="email"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Phone"
            type="number"
            fullWidth
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Password"
            type="password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Confirm Password"
            type="password"
            fullWidth
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {errorMessage && (
            <p style={{ color: 'red' }}>{errorMessage}</p>
          )}
        </DialogContent>
        <DialogActions className='d-flex justify-content-between'>
          {/* <Login ></Login> */}
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleSignUp}>Sign Up</Button>
          </DialogActions>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default SignUp



