import {BrowserRouter, Route,Routes} from 'react-router-dom'
import Navbar from '../src/components/Navbar'
import Home from './pages/Home'
function App() {

  return (
    <BrowserRouter>
    <div>
       <h1 className='text-[#1c6cae]  p-2 text-xl text-center font-semibold sm:xl md:text-3xl'>Blog APP</h1>
       <Navbar/>
       <Routes>
        <Route path='/' element={<Home/>}>

    </Route>
       </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
