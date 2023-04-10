import { rectInit, updateRects,bubblesort } from "./BubbleFunctions";

//TODO: make BubbleSort cleaner

let rects: any = null; // Initialize rects variable outside of BubbleSort
let isFirstSort = false;
//remove increment
export async function BubbleSort(delay: number, clicked:boolean,info:boolean,free:boolean, N:number,width:number, xIncrement:number, isSliderDefault:boolean) {

  let canvas = document.getElementById("canvas") as HTMLCanvasElement;
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



export class Block {
    public x:number;
    public y:number;
    private width:number;
    private height:number;
    public value:number;
    public isHighlighted:boolean;
    constructor(x:number,y:number,width:number,height:number,value:number,isHighlighted:boolean){
        
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.value = value; //random value: change for user input 
        this.isHighlighted = isHighlighted;
    }

/**
 * 
 * @param ctx 
 * draw the rect based on value and 
 * if highlighted
 */
draw(ctx:any):void{
    ctx.fillStyle = 'red'
    if(!this.isHighlighted){
    ctx.fillStyle = 'black';
    }
    const rectHeight = this.value * ctx.canvas.height;
    ctx.fillRect(this.x, ctx.canvas.height - rectHeight, this.width, rectHeight);
}

//call before updating valu
/**
 * @param ctx 
 * clear the rect
 */
clear(ctx:any):void{
    ctx.clearRect(this.x, 0, this.width, ctx.canvas.height);
}
    
}