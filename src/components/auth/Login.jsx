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
import SignUp from './SignUp';

const Login = () => {
    const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const navigate = useNavigate()

  const handleClose = (data) => {
    setOpen(false);
    setErrorMessage('');
    navigate('/')
  };

  const handleLogin = async ()=>{
    try {
      const formData = {
        "name":name,
        "email":email,
        "password":password
      }
      const result = await axios.post("http://localhost:8081/auth/login",formData)
      const token = result.data.token
      localStorage.setItem("token", token)
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      handleClose()
    } catch (error) {
      console.log(error)
    }
}

  

  return (
    <div>
      <Button variant="outlined" className='bg-danger text-white' onClick={handleClickOpen}>
        Login
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="sign-up-dialog-title"
      >
        <DialogTitle id="sign-up-dialog-title">Login</DialogTitle>
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
            label="Password"
            type="password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errorMessage && (
            <p style={{ color: 'red' }}>{errorMessage}</p>
          )}
        </DialogContent>
        <DialogActions className='d-flex justify-content-between'>
          <SignUp handleCloseLogin = {handleClose}></SignUp>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleLogin}>Login</Button>
          </DialogActions>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Login




