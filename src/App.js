import './App.css';
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import {Toaster} from "react-hot-toast"
import Cart from './components/Cart';
import Mediaquary from './components/Mediaquary.css'
function App() {
  return (
  <BrowserRouter>
  <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Cart' element={<Cart/>}/>

    </Routes>
    <Toaster/>
  </BrowserRouter>
  
  );
}

export default App;
