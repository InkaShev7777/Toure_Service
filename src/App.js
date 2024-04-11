import React from 'react'
import Home from './pages/Home'
import Enrollee from './pages/Enrollee'
import { Routes, Route } from 'react-router-dom';

export const App = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/enrollee' element={<Enrollee/>}></Route>
        </Routes>
    </div>
  )
}
 export default App;