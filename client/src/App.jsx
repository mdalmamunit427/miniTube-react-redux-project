import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navabar from './components/shared/Navabar'
import { Outlet } from 'react-router-dom'
import Footer from './components/shared/Footer'
import { Provider } from 'react-redux'
import { store } from './features/store'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Provider store={store}>
     <Navabar/>
     <div>
     <Outlet/>
     </div>
     <Footer/>
    </Provider>
  )
}

export default App
