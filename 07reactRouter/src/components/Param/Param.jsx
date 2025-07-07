import React from 'react'
import { useParams } from 'react-router-dom'

function Param() {
    const {userid} = useParams();
  return (
    <div className='bg-gray-500 p-4 text-2xl text-white font-bold'>Param : {userid}</div>
  )
}

export default Param