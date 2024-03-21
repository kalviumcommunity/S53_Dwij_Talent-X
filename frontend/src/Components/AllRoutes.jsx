import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import LogIn from './LogIn'
import Post from './Post'
import Profile from './Profile'

export default function AllRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<LogIn/>} />
        <Route path='/post' element={<Post/>} />
        <Route path='/profile' element={<Profile/>} />

    </Routes>
    
  )
}
