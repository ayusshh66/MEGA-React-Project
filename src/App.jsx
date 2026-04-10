import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { useDispatch } from 'react-redux'
import authservice from './appwrite/auth'
import {login, logout} from './store/authslice'
import { useFetcher } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'


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
  

  return !loading? (

    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full flex flex-col justify-center items-center'>
        <Header />
        <main>
        {/* TODO:  <Outlet /> */}
        </main>
        <Footer />
      </div>
    </div>
      
  ) : null
}

export default App
