import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice';
const Login = () => {
    const [username, setUsername] = useState('');
    


    // onChange function
    const handleUsernameChange = (e) => {
        setUsername( e.target.value);
        console.log(username)
    }

    // using the dispatch hook from react-redux
    const dispatch = useDispatch();

    // onSubmit function
    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(
            login({
                name: username,
                isloggedIn: true
            })
        )
    }
  return (
    <div
        className='login'>
        <form className='login-form' onSubmit={(e) => handleSubmit(e)}>
            <h1>
                Login
            </h1>
            <input type='name' placeholder='Username' value={username} onChange={handleUsernameChange}/>
            <button type='submit' className='submit-btn'>
                Submit
            </button>
        </form>

    </div>
  )
}

export default Login