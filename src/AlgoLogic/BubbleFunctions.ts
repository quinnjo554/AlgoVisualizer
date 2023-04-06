import { Block } from "./BubbleSort";
const XINCREMENT = 22; // make dependent on a slider
const YINCREMENT = 50;
const WIDTH = 20;
const HEIGHT = 300;
const N = 10; //max 300 with x and y of 1

let values:any = []
for(let i =0; i < N; i++){
    values[i] = (Math.random());
}

export function rectInit(ctx:any): Array<Block>{
let rects = [];
    for (let i = 0; i < N; i++) {
      let rect = new Block(i * XINCREMENT, YINCREMENT, WIDTH, HEIGHT,values[i], false);
      rects.push(rect);
    }
    updateRects(rects,ctx);
    return rects;
}

export function updateRects(rects:any, ctx:any){
    for(let i =0; i<rects.length; i++){
        rects[i].draw(ctx)
    }
}
export function clearRects(rects:any, ctx:any){
    for(let i =0; i<rects.length; i++){
        rects[i].clear(ctx)
    }
}

export async function displayBubblesort(rects:any, ctx:any, pass:number):Promise<void>{
    var i, j :number;
    for (i = 0; i < rects.length-1; i++)
    {
        for (j = 0; j < rects.length-i-1; j++)
        {
            if (rects[j].value > rects[j+1].value)
            {      
                if(pass > 0){
                    await displaySwap(rects,j,j+1,ctx,800); //wait for the promis in swap before continuing
                    rects[j].isHighlighted = false;
                    rects[j+1].isHighlighted = false;
                    pass--;
                }
            }
        }
    }
}
function displaySwap(arr:any, xp:number, yp:number,ctx:any, delay:number)
{
    clearRects(arr, ctx);
  var temp = arr[xp].value;
  arr[xp].value = arr[yp].value;
  arr[yp].value = temp;
  
  arr[xp].isHighlighted = true;
  arr[yp].isHighlighted = true;
  updateRects(arr, ctx);

  return new Promise(resolve => setTimeout(() => {
    arr[xp].isHighlighted = false;
    arr[yp].isHighlighted = false;
    updateRects(arr, ctx);
  }, delay));
}




export async function bubblesort(rects:any, ctx:any):Promise<void>{
    var i, j :number;
    for (i = 0; i < rects.length-1; i++)
    {
        for (j = 0; j < rects.length-i-1; j++)
        {
            if (rects[j].value > rects[j+1].value)
            {       
                    await swap(rects,j,j+1,ctx,0); //wait for the promis in swap before continuing
            }
        }
    }
}
function swap(arr:any, xp:number, yp:number,ctx:any, delay:number)
{
    clearRects(arr,ctx);
    arr[xp].isHighlighted = true;
    arr[yp].isHighlighted = true;
    var temp = arr[xp].value;
    arr[xp].value = arr[yp].value;
    arr[yp].value = temp;
    updateRects(arr,ctx)
    arr[xp].isHighlighted = false;
    arr[yp].isHighlighted = false;
    return new Promise(resolve => setTimeout(resolve, delay)); //after the delay reslove the promise
}
