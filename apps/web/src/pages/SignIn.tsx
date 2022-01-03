import * as React from 'react'
import TextField from '@mui/material/TextField'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Alert from '@mui/material/Alert'
import { login } from '../utils/auth'
import { useUser } from '../contexts/Authentication'

function SignInPage() {
  const { setUser } = useUser()
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [error, setError] = React.useState<string | null>(null)

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (
    event,
  ) => {
    event.preventDefault()
    setError(null)

    try {
      const user = await login(email, password)
      if (user) {
        setUser(user)
      }
    } catch (err) {
      setError('Invalid login/password')
    }
  }

  return (
    <Grid>
      <Paper variant="elevation" elevation={2} style={{ padding: '10px' }}>
        <form onSubmit={handleSubmit}>
          <TextField
            id="email"
            helperText="Please enter your email"
            label="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            fullWidth
            style={{ marginBottom: '20px' }}
          />
          <TextField
            id="password"
            helperText="Please enter your password"
            label="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            fullWidth
          />
          <Button type="submit" variant="contained" fullWidth>
            Login
          </Button>
        </form>
        {error ? <Alert severity="error">{error}</Alert> : null}
      </Paper>
    </Grid>
  )
}

export default SignInPage
