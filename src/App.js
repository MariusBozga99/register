import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Registration from './components/authentication/registration/Registration';
import Login from './components/authentication/login/Login';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Registration />} />
      </Routes>
    </>
  );
}

export default App;
