import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from "./Components/Header/Header";
import Home from './Components/Home/Home';
import Cinema from './Components/Cinema/Cinema';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
      <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/cinema' element={<Cinema></Cinema>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
