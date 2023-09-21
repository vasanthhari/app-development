
import './App.css';
import './login.js';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './login.js';
import Register from './Register';
import HomePage from './HomePage';
import Dashboard from './Dashboard';
import EventType from './EventType';
import Upcoming from './Upcoming';
import Prebooked from './Prebooked';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
     <Route path="/" element ={<HomePage />}></Route>
     <Route path="/dashboard" element ={<Dashboard />}></Route>
     <Route path="/userlogin" element ={<Login />}></Route>
     <Route path="/event-types" element={<EventType/>}></Route>
     <Route path="/register" element={<Register/>}></Route>
     <Route path="/prebooked" element={<Prebooked/>}></Route>
     <Route path="/upcoming" element={<Upcoming/>}></Route>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;