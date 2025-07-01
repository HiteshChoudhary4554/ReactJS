import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function Myapp(){
    return (
        <h1>My father is Hero in world</h1>
    )
}

const ReactElement = {
    type : "a",
    props : {
        href : "https://www.google.com",
        target : "_blank"
    },
    children : "click to run this code"
}

const anotherElement  = (
    <a href="https://www.google.com" target="_blank">visit google website</a>
)

const username = "Hitesh";

const reactElement = React.createElement(
    'a',
    {
        href : "https://www.google.com",
        target : "_blank"
    },
    "Click here to visi to Google website",
    username
)

createRoot(document.getElementById('root')).render(
    reactElement
)
 