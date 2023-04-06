import React, { useEffect, useState } from 'react'
import { BubbleSort } from '../AlgoLogic/BubbleSort'
function BubbleHero() {
  const [increment, setIncrement] = useState(1);
  const [clicked, setClicked] = useState(false);
  //return a list of divs with a width and height of the number selected
  useEffect(()=>{
    BubbleSort(increment,clicked)
  },[increment, clicked]);

  const handleClickDisplay = () => {
    setIncrement((prev)=>prev+1);
  }
  const handleClick = () =>{
    setClicked((prev)=>!prev);
  }
  return (
        <div className='w-1/2 h-[80vh] overflow-hidden mt-5 rounded-md'>
           <div id='box' className='w-full h-full shadow-xl shadow-black bg-white'>
              <canvas id="canvas" className='canvas'></canvas>
           </div>
           <div className='fixed right-0 top-20 bg-gray-100 w-1/2 h-full'>
                <input type='button' id='button' onClick={handleClickDisplay} value={"Next"} className='bg-green-300 p-3 w-max relative left-1/2 top-1/2'></input>
                <button onClick={handleClick} className='bg-green-300 p-3 w-max relative left-1/3 top-1/2' >Sort</button>
                <p id='increment'>{increment}</p>
           </div>
        </div>
  )
} 

export default BubbleHero