import React from 'react'
import Aside from './components/Aside'
import { Outlet } from 'react-router'

const App = () => {
  return (
    <div className='flex gap-4 '>



    

      <Aside/>
      <div className='p-4'>
        <Outlet/>
        
      </div>


    
    </div>
  )
}

export default App