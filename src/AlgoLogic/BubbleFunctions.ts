import { Block } from "./BubbleSort";
const YINCREMENT = 50;
const HEIGHT = 300;
//const N = 100; //max 300 with x and y of 1

let values:any = []

export function rectInit(ctx:any,N:number,x:number, width:number): Array<Block>{
    
    let rects = [];
    for (let i = 0; i < N; i++) {
        values[i] = (Math.random());
      let rect = new Block(i * x, YINCREMENT, width, HEIGHT,values[i], false);
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

export async function bubblesort(rects:any, ctx:any,delay:number):Promise<void>{
    var i, j :number; 
    for (i = 0; i < rects.length-1; i++)
    {
        for (j = 0; j < rects.length-i-1; j++)
        {
            if (rects[j].value > rects[j+1].value)
            {       
                    await swap(rects,j,j+1,ctx,delay); //wait for the promis in swap before continuing
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



