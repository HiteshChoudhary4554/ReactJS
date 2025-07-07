import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {RouterProvider, Route, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Layout from './layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import Param from './components/Param/Param.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'
import Hitesh from './components/Hitesh/Hitesh.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element : <Layout />,
//     children: [
//       {
//         path:'/',
//         element : <Home />
//       },
//       {
//         path:"about",
//         element: <About/>
//       },
//       {
//         path:"contact",
//         element: <Contact />
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='/' element={<Home />} />
      
      {/* About Route with nested route */}
      <Route path='about' element={<About />}>
        <Route path='hitesh' element={<Hitesh />} />
      </Route>

      <Route path='contact' element={<Contact />} />
      <Route path='param/:userid' element={<Param />} />
      <Route
        path='github'
        loader={githubInfoLoader}
        element={<Github />}
      />
    </Route>
  )
);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
