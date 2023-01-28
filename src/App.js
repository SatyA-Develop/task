import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Adduser from './Components/Adduser/Adduser'
import Edit from './Components/Edit/Edit'
import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import View from './Components/View/View'


const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/user/:id' element={<View/>} />
        <Route path='/add-user' element={<Adduser/>}/>
        <Route path='/edit-user/:id' element={<Edit/>} />
      </Routes>
    </div>
  )
}

export default App