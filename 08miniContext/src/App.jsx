import './App.css'
import Login from './component/Login'
import Profile from './component/Profile'
import UserLog from './component/UserLog'
import UserContextProvider from './context/UserContextProvider'

function App() {

  return (
    <UserContextProvider>
        <h1>Hello welcome chai aur code</h1>
        <Login />
        <Profile />
        <UserLog />
    </UserContextProvider>
  )
}

export default App
