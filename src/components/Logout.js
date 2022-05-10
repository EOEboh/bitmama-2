import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../features/userSlice';

const Logout = () => {
    const user = useSelector(selectUser);

    
    const dispatch = useDispatch();
    // function for logout
    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(logout())
    }

  return (
    <div>
        <h1>
            Welcome { " "}
         <span>
            {user.name}
         </span>
        </h1>
        <button className='logout-btn' onClick={(e) => handleLogout(e)}>
            Logout
        </button>
    </div>
  )
}

export default Logout