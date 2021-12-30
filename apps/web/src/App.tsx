import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Grid from '@mui/material/Grid'
import { useUser } from './contexts/Authentication'

const SignInPage = React.lazy(() => import('./pages/SignIn'))
const TimelinePage = React.lazy(() => import('./pages/Timeline'))

function App() {
  const { user } = useUser()

  return (
    <Router>
      <h3>Baby Twitter</h3>
      <Grid
        container
        spacing={0}
        justifyContent="center"
        alignItems="center"
        direction="row"
      >
        <React.Suspense fallback={<h1>Loading...</h1>}>
          {user ? (
            <Routes>
              <Route path="/signin" element={<SignInPage />} />
              <Route path="/" element={<TimelinePage />} />
            </Routes>
          ) : (
            <Routes>
              <Route path="*" element={<SignInPage />} />
            </Routes>
          )}
        </React.Suspense>
      </Grid>
    </Router>
  )
}

export default App
