import React from 'react'
import { algos } from './constants'
function NavBar() {

    const listItems = algos.map((value,index)=>{
        return <li className=' ml-4 mr-7 bg-opacity-55 bg-emerald-600 p-2 bg-opacity-50 rounded-md hover:bg-opacity-100'  key={value.key}>{value.content}</li>
    })
  return (
    <div className='w-screen h-20 bg-sky-800'>
        <ul className='flex relative top-5 text-white '>{listItems}</ul>
    </div>
  )
}

export default NavBar