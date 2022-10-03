
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './component/About/About';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Products from './component/Products/Products';


function App() {

  return (
    <div className="App">
      <Header></Header>
        <Routes>
  <Route path='/' element={<Home></Home>}></Route>
  <Route path='/home' element={<Home></Home>}></Route>
  <Route path='/about' element={<About></About>}></Route>
  <Route path='/products' element={<Products></Products>}></Route>
</Routes>
    </div>
  );
}

export default App;
