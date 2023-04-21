import React from 'react'
import { useState } from 'react';
import IDE from './IDE';
function Lesson() {
  const [increment, setIncrement] = useState(1); // used to increment the display
  const handleClickDisplay = () => {
    setIncrement((prev) => prev + 1); 
  };

  //load a new page instead

  return (
    <div className='fixed top-20 left-0 w-[100%] h-[100vh] z-10 bg-white'>
      {increment == 1 ? ( 
      <div className='fixed  left-0 w-[50%] h-[100%] bg-slate-100 shadow-black shadow-lg'>
      
      <h1 className='flex justify-center font-bold mt-3 text-2xl'>What Is Bubble Sort</h1>
      <hr />
      <div className='w-[75%] ml-24 align-middle'>
      <p className=' text-lg mt-3'>
        Bubble sort is a simple sorting algorithm that repeatedly swaps 
        adjacent elements in a list until they are sorted. 
        The algorithm starts at the beginning of the list, compares adjacent elements and swaps
         them if they are in the wrong order, and then moves on to the next pair of adjacent 
         elements. This process continues until no more swaps are needed, which means the list 
         is sorted. However, bubble sort is not very efficient for large lists, 
         as it has a worst-case and average-case time complexity of <b>O(n^2)</b>.</p>
    </div>
    <div className="sort-array">
      <div className="array-element-1">9</div>
      <div className="array-element-2">2</div>
      <div className="array-element-3">7</div>
  </div>
   
    </div>
      ) : null}

    {increment == 2 ? (
      <div className='relative top-20'>
       <IDE/>
       </div>
    ):null}

  <button id="button" onClick={handleClickDisplay} className="bg-green-300 p-3 w-max fixed right-10 bottom-10">
        <p>{increment}</p>
  </button>
    </div>
  )
}

export default Lesson