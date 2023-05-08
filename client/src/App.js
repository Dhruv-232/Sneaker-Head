import logo from './logo.svg';
import './App.css';
import {BrowserRouter , Routes , Route}
  from "react-router-dom"
import Login from "./components/login"

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path = '/login' element={ <Login /> } />
      <Route path = '/home' element={ <Login /> } />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
