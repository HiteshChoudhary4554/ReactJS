import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'

function UserLog() {
   const {user,setUser} = useContext(UserContext);
   const [username,setUsername] = useState();
   const changeSaved = (e) => {
    e.preventDefault();
    setUser({username})
   }
   if (user) return( 
   <div>
    Hello {user.username} click link and buy other product !!
    <input 
        type="text" 
        placeholder=''
        value={username}
        onChange={(e) => setUsername(e.target.value)}
    />
    <button onClick={changeSaved}>Changes</button>
    {user.username}
   </div> 
   )

}

export default UserLog;