import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Register from './Register';
import UserDetails from './UserDetails';
import UpdateUser from './UpdateUser';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Register />} />
        <Route path='/users' element={<UserDetails />} />
        <Route path='/users/:id' element={<UpdateUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
