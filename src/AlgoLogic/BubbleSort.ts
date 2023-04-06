import { rectInit, updateRects, displayBubblesort,bubblesort } from "./BubbleFunctions";

let rects: any = null; // Initialize rects variable outside of BubbleSort
let clicked = false;
export function BubbleSort(increment: number, clicked:boolean) {
  let canvas = document.getElementById("canvas") as HTMLCanvasElement;
  let parent = document.getElementById("box") as HTMLElement;
  let button = document.getElementById('ass') as HTMLElement;
  // Constant Variables

  if (canvas && parent) {
    const ctx = canvas.getContext("2d");
    canvas.width = parent.offsetWidth; // set width and height to parent container
    canvas.height = parent.offsetHeight;
    if (ctx) {
      if (!rects) { // Check if rects is null before calling rectInit
        rects = rectInit(ctx);
      }
      
      //tab for how it works show 
      displayBubblesort(rects, ctx,increment);
      
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
     isHighlighted:Boolean;
    constructor(x:number,y:number,width:number,height:number,value:number,isHighlighted:Boolean){
        
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
    ctx.fillStyle = 'blue';
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