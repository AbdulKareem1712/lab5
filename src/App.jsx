import { useState } from 'react'
import SignIn from './components/SignIn'
import './App.css'
import AuthContainer from './components/AuthContainer'
import SignUp from './components/SignUp'
import Dashboard from './components/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <Dashboard/>
      <SignUp/>
    <AuthContainer/>
    <SignIn/>
      </>
  )
}

export default App
