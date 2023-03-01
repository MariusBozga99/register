import { useState } from 'react';
/* import axios from 'axios'; */
import { Link } from 'react-router-dom';
import './Registration.css';
import { axiosInstance } from '../../../services/AxiosService.js';

function Registration() {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  async function submit(event) {
    event.preventDefault();
    try {
      await axiosInstance
        .post('/auth/register', {
          email: email,
          firstName: firstName,
          lastName: lastName,
          password: password,
          username: username,
        })
        .then((res) => {
          alert('Registration Successfully');
          setEmail('');
          setFirstName('');
          setLastName('');
          setPassword('');
          setUsername('');

          localStorage.setItem('token', res.data.token);
        });
    } catch (err) {
      alert('Registration Failed');
    }
  }

  return (
    <div className="container mt-4">
      <form>
        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter Email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter First Name"
            value={firstName}
            onChange={(event) => {
              setFirstName(event.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Last Name"
            value={lastName}
            onChange={(event) => {
              setLastName(event.target.value);
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
        <button className="btn btn-primary mt-4" onClick={submit}>
          Register
        </button>
      </form>
      <p>
        Back to login
        <span className="line">
          <Link to={'/'}>Login</Link>
        </span>
      </p>
    </div>
  );
}

export default Registration;
