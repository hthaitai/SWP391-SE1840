import './Login.scss'
import { TextField, Box, Button } from '@mui/material'

export default function Login() {
  return (
    <div className='register'>
      <Box className='register__form'>
        <h2>Login</h2>
        <TextField
          required
          className='register-input'
          id="outlined-required"
          label="Email or username"
          defaultValue=""
        />
        <TextField
          required
          className='register-input'
          id="outlined-required"
          label="Password"
          defaultValue=""
        />
        <TextField
          required
          className='register-input'
          id="outlined-required"
          label="Confirm Password"
          defaultValue=""
        />
        <TextField
          required
          className='register-input'
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