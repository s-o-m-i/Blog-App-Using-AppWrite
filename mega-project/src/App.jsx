import React, { useEffect } from 'react'
import conf from './conf/conf'
import { useDispatch, useSelector } from 'react-redux';
import authService from './appwrite/auth';
import { login } from './store/authSlice';
import { Footer, Header } from './components';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';

const App = () => {
  const [loading, setLoading] = useState(true)

  const state = useSelector((state) => state)
  const dispatch = useDispatch();

  useEffect(()=>{
    // const authService = new authService()
    authService.getCurrentUser()
    .then((userData) => {
      if(userData){
        dispatch(login({userData}))
      }else{
        dispatch(logout())
      }
    }).catch((error) => {
      console.log("Error in authentication check", error)
    })
    .finally(() => setLoading(false))
  },[])

  return (
    !loading ? <div className='min-h-screen'>
      <Header/>
      <main>
        {/* <Outlet/> */}
      </main>
      <Footer/>
    </div> : <div className="flex justify-center items-center h-screen">
    Loading...
    </div>
  )
}

export default App