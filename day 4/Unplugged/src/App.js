import './App.css';
import './login.js';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './login.js';
import Register from './Register.js';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route path="/" element ={<Login />}></Route>
    <Route path="/register" element ={<Register />}></Route>
     
    </Routes>
    </BrowserRouter>
    </div>
  );
}
export default App;