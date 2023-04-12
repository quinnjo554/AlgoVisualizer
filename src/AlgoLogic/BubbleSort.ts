import { rectInit, updateRects,bubblesort } from "./BubbleFunctions";

//TODO: make BubbleSort cleaner

let rects: any = null; // Initialize rects variable outside of BubbleSort
let isFirstSort = false;
//remove increment
export async function BubbleSort(delay: number, clicked:boolean,info:boolean,free:boolean, N:number,width:number, xIncrement:number, isSliderDefault:boolean) {

  let canvas = document.getElementById("Bubble") as HTMLCanvasElement;
  let parent = document.getElementById("box") as HTMLElement;
  if (canvas && parent) {
    const ctx = canvas.getContext("2d");
    canvas.width = parent.offsetWidth; // set width and height to parent container
    canvas.height = parent.offsetHeight;
    if (ctx) {
      // Check if rects is null before calling rectInit
      if(!rects){
        rects = rectInit(ctx,50,7,6); // default value on load
        isFirstSort =true;
      }
      if(free && clicked){
        if(isFirstSort && isSliderDefault){ // check if this is the first sort 101 is a default value to see if he slider has moved
          isFirstSort = false;
        } else { // if not, reset the rects to initial state
          rects = rectInit(ctx,N,xIncrement,width);
        }
        await bubblesort(rects,ctx,delay);
      }
      
      updateRects(rects, ctx);
    }
  }
}


