import './App.css'
import Card from './components/card.jsx'


function App() {
let myObj = {
  username : "Hitesh",
  age : 21
}

let userArr = [1,2,3]

  return (
    <>
    <Card username="chai aur code" btnText = "visit Me"/>
    <Card username="Hitesh Rame"/>
    </>
  )
}

export default App
