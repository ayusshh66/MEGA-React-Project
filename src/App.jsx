import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { useDispatch } from 'react-redux'
import authservice from './appwrite/auth'
import {login, logout} from './store/authslice'
import { useFetcher } from 'react-router-dom'


function App() {
  // console.log(import.meta.env.VITE_APPWRITE_URL);
  const [loading,setLoading] = useState(true);
  const dispatch = useDispatch()

  useEffect(() => {
    authservice.getCurrentUser()
    .then((userData) => {
      if(userData){
        dispatch(login({userData}))
      }
      else {
        dispatch(logout)
      }
    })
    .finally(() => setLoading(false))
  },[])  
  

  return (
    <>
      <h1>hi my name is ayush </h1>
    </>
  )
}

export default App
