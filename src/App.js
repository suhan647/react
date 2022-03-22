import logo from './logo.svg';
import './App.css';
import Home from'./pages/Home';
import Nopage from './pages/Nopage'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Layout from './pages/Layout'
import Contact from './pages/Contact'
import Blogs from './pages/Blogs'

function App() {
  return (
    

<BrowserRouter>
<Routes>

<Route path="/" element={<Nopage/>}></Route>
<Route index element={<Home/>}></Route>
<Route path="layout" element={<Layout/>}></Route>
<Route path="contact" element={<Contact/>}></Route>
<Route path="blog" element={<Blogs/>}></Route>

</Routes>

</BrowserRouter>

    
  );
}

export default App;
