import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  return (
   <>
      <div className='Login'>
        <form action="POST">
          <ul className='List'>
            <li>
              <label htmlFor="user">user</label>
              <input type="text" id='user' />
            </li>
            <li>
            <label htmlFor="user">password</label>
              <input type="password" id='pass' />
            </li>
            <button onClick={
              console.log("logged in")
            }>
              login 
            </button>
          </ul>
        </form>
      </div>
   
   </>
      
  )
}

export default App
