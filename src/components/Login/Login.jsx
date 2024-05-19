import './Login.scss'
import { TextField, Box, Button } from '@mui/material'

export default function Login() {
  return (
    <div className='login'>
      <Box className='login__form'>
        <h2>Login</h2>
        <TextField
          required
          className='login-input'
          id="outlined-required"
          label="Email or username"
          defaultValue=""
        />
        <TextField
          required
          className='login-input'
          id="outlined-required"
          label="Password"
          defaultValue=""
        />

        <Button variant="contained" href="#contained-buttons" className='btn-login'>
          Login
        </Button>
      </Box>


    </div>
  )
}