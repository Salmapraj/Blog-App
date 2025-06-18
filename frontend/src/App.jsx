import {BrowserRouter, Route,Routes} from 'react-router-dom'
import Navbar from '../src/components/Navbar'
import Home from './pages/Home'
import NewPost from './pages/NewPost'
import Edit from "./pages/Edit"
function App() {

  return (
    <div>
    <BrowserRouter>
       <Navbar/>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/new' element={<NewPost/>}/>
<Route path='/edit/:id' element={<Edit />} />
       </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
