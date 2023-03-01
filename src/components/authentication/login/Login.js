import { useState } from 'react';
import { Link } from 'react-router-dom';
/* import axios from 'axios'; */
import './Login.css';
import { axiosInstance } from '../../../services/AxiosService';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function submit(event) {
    event.preventDefault();
    try {
      await axiosInstance
        .post('/auth/login', {
          username: username,
          password: password,
        })
        .then((res) => {
          alert('Login Successfully');
          setUsername('');
          setPassword('');

          localStorage.setItem('token', res.data.token);
        });
    } catch (err) {
      alert('Login Failed');
    }
  }

  return (
    <section>
      <div className="container mt-4">
        <form>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Username"
              value={username}
              onChange={(event) => {
                setUsername(event.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter Password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
          </div>
          <button className="btn btn-primary mt-4" onClick={submit}>
            Login
          </button>
        </form>
        <p>
          Need an Account?
          <span className="line">
            <Link to={'/register'}>Register</Link>
          </span>
        </p>
      </div>
    </section>
  );
}

export default Login;
