import React, { useEffect, useRef, useState } from 'react';
import { BubbleSort } from '../AlgoLogic/BubbleSort'; // import BubbleSort function from a file
import Lesson from './Lesson';
import { render } from 'react-dom';
import { QuickSort } from '../AlgoLogic/QuickSort';
//reuse this component 
function Sort({sortType}:any) {
  // Set up state variables using useState hook
  const [increment, setIncrement] = useState(1); // used to increment the display
  const [clicked, setClicked] = useState(false); // used to trigger the sorting algorithm
  const [infoClick, setInfoClick] = useState(false); // used to show/hide infographic
  const [isBubbleRunning, setIsBubbleRunning] = useState(false); // used to keep track of whether sorting is in progress
  const [freeClick, setFreeClick] = useState(false); // used to show/hide free range button
  const [sliderVal, setSliderVal] = useState(50);
  const [sliderXIncrement, setSliderXIncrement] = useState(7);
  const [sliderWidth, setSliderWidth] = useState(6);
  const [sliderDelay, setSliderDelay] = useState(0);
  const [isSliderDefault, setisSliderDefault] = useState(true); 
  

  useEffect(() => {
    setIsBubbleRunning(true); // set isBubbleRunning to true when the effect is triggered
    //add val to bubble sort
    if(sortType == "Bubble"){
    BubbleSort(sliderDelay, clicked, infoClick, freeClick,sliderVal,sliderXIncrement,sliderWidth,isSliderDefault) // call BubbleSort function with current state variables
      .then(() => {
        setIsBubbleRunning(false);
        setClicked(false); // set isBubbleRunning to false when sorting is finished
      })
      .catch(() => {
        setIsBubbleRunning(false); // set isBubbleRunning to false when sorting fails
      });
    }
    if(sortType == "Quick"){
      QuickSort(sliderDelay, clicked, infoClick, freeClick,sliderVal,sliderXIncrement,sliderWidth,isSliderDefault) // call BubbleSort function with current state variables
      .then(() => {
        setIsBubbleRunning(false);
        setClicked(false); // set isBubbleRunning to false when sorting is finished
      })
      .catch(() => {
        setIsBubbleRunning(false); // set isBubbleRunning to false when sorting fails
      });
    }
  }, [clicked]); // run this effect when clicked state changes or when the slider moves for N

  // handleClickDisplay function: increment the display for info
  

  // handleFreeClick function: toggle freeClick state and set infoClick state to false
  const handleFreeClick = () => {
    if (!isBubbleRunning) { // only allow clicking if sorting is not in progress
      setFreeClick((prev) => !prev); // toggle freeClick state
      setInfoClick(false); // set infoClick state to false
    }
  };

  // handleInfoClick function: toggle infoClick state and set freeClick state to false
  const handleInfoClick = () => {
    if (!isBubbleRunning) { // only allow clicking if sorting is not in progress
      setInfoClick((prev) => !prev); // toggle infoClick state
      setFreeClick(false); // set freeClick state to false
    }
  };

  // set up classNames for buttons based on current state variables
  const infoClass = infoClick ? 'free-active infoHidden sortButtonHidden' : '';
  const freeClass = freeClick ? 'info-inactive freeHidden nextButtonHidden' : '';

  // handleClick function: toggle clicked state and set isBubbleRunning state to true
  const handleClick = () => {
    if (!isBubbleRunning) { // only allow clicking if sorting is not in progress
      setClicked((prev) => !prev); // toggle clicked state
      setIsBubbleRunning(true); // set isBubbleRunning state to true
    }
  };

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const val = event.target.value;
    setSliderVal(Number(val));
    setisSliderDefault(false);
  };

  const handleSliderXIncrementChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const val = event.target.value;
    setSliderXIncrement(Number(val));
    setisSliderDefault(false);
  };
  const handleSliderWidthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const val = event.target.value;
    setSliderWidth(Number(val));
    setisSliderDefault(false);
  };
  const handleSliderDelayChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const val = event.target.value;
    setSliderDelay(Number(val));
    setisSliderDefault(false);
  };

  const renderLesson = () => {
    // Define different lessons based on sortType prop
    if (sortType === 'Quick') {
      return <p>Boobs</p>;
    } else if (sortType === 'Bubble') {
      return <Lesson/>;
    } else {
      // Render a default lesson or handle unsupported sort types
      return <p>Balls Shit: Something wrong</p>;
    }
  };
  return (
    <div className="sortContainer w-2/3 h-[91vh] rounded-md">
      <div id="box" className="w-full h-full bg-white">
        <canvas id={sortType} className="canvas"></canvas>
      </div>
      <div className="fixed right-0 top-20 bg-gray-100 w-1/3 h-full">
        <div className="flex justify-start">
          <button
            onClick={handleInfoClick}
            className={`info mr-3 ml-3 z-50 rounded-md w-1/2 h-max p-1 ${
              infoClass || 'bg-sky-500'
            }`}
            disabled={infoClick}
          >
            Lesson
          </button>
          <button
            onClick={handleFreeClick}
            className={`free w-1/2 z-50 h-max rounded-md p-1 ${
              freeClass || 'bg-sky-500'
            }`}
            disabled={freeClick}
          >
            {sortType} sort 
          </button>
        </div>
        
        <button
          onClick={handleClick}
          className="bg-green-300 p-3 w-max fixed right-10 bottom-20"
          disabled={!freeClick && !infoClick}
        >
          Sort
        </button>
        {freeClick ? (
          <div>
            <div>
                <input onChange={handleSliderChange} type="range" name="Volume" id="volume" min="5" max={sortType == "Quick" ? "1000" : "100"} />
                <p>{sliderVal}</p>
            </div>
            <div>
                <input onChange={handleSliderXIncrementChange} type="range" name="XIncrement" id="increment" min="1" max="50" />
                <p>{sliderXIncrement}</p>
            </div>
            <div>
                <input onChange={handleSliderWidthChange} type="range" name="Width" id="width" min="1" max="50" />
                <p>{sliderWidth}</p>
            </div>
            <div>
                <input onChange={handleSliderDelayChange} type="range" name="Delay" id="delay" min="0" max="100" />
                <p>{sliderDelay}</p>
            </div>
          </div>
        ):null}
        {infoClick ? (
          renderLesson() //maybe have a diff lesson tag depending on sortType
        ) : null} 
      </div>
    </div>
  );
}

export default Sort;
