import React from 'react'
import { useState } from 'react';
import { algos } from '../Constants/constants'
function NavBar() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleParentHover = (index:any) => {
    setActiveIndex(index);
  }

  const handleParentLeave = () => {
    setActiveIndex(null);
  }

  const listItems = algos.map((value,index)=>{
    return (
      <li 
        className={`item${index} ml-4 mr-7 text-xl bg-opacity-55 p-2 bg-opacity-50 rounded-md hover:bg-opacity-100`}  
        key={value.key}
        onMouseEnter={() => handleParentHover(index)}
        onMouseLeave={() => handleParentLeave()}
      >
        {value.content}
        <ul className={`child-menu ${activeIndex === index ? 'visible' : 'hidden'}`}>
          {value.children?.map((childValue, childIndex) => {
            return (
              <li key={childValue.content}>
                <a href={childValue.link}>{childValue.content}</a>
              </li>
            );
          })}
        </ul>
      </li>
    );
  });
  return (
    <div className='w-screen h-20 bg-sky-800'>
        <ul className='flex relative justify-start top-5 text-white '>{listItems}</ul>
    </div>
  )
}

export default NavBar