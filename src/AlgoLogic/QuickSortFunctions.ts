import { Block } from "./Block";
import { clearRects,updateRects } from "./BubbleFunctions";
const YINCREMENT = 50;
const HEIGHT = 300;
//const N = 100; //max 300 with x and y of 1

let values:any = []

export async function quickSort(rects:any, ctx:any,delay:number):Promise<void>{
    async function partition(low:number, high:number) {
        var pivot = rects[Math.floor((low + high) / 2)].value; // choose pivot
        var i = low;
        var j = high;
        while (i <= j) {
            while (rects[i].value < pivot) { // find element on the left to swap
                i++;
            }
            while (rects[j].value > pivot) { // find element on the right to swap
                j--;
            }
            if (i <= j) {
                await swap(rects, i, j, ctx, delay); // swap the elements
                i++;
                j--;
            }
        }
        return i;
    }

    async function quickSortRecursive(low:number, high:number) {
        if (low < high) {
            var pivotIndex = await partition(low, high); // get the pivot index
            await quickSortRecursive(low, pivotIndex - 1); // recursively sort left subarray
            await quickSortRecursive(pivotIndex, high); // recursively sort right subarray
        }
    }

    await quickSortRecursive(0, rects.length - 1); // start quicksort with entire array
}

async function swap(arr:any, xp:number, yp:number, ctx:any, delay:number) {
    clearRects(arr,ctx);
    arr[xp].isHighlighted = true;
    arr[yp].isHighlighted = true;
    var temp = arr[xp].value;
    arr[xp].value = arr[yp].value;
    arr[yp].value = temp;
    updateRects(arr,ctx)
    arr[xp].isHighlighted = false;
    arr[yp].isHighlighted = false;
    return new Promise(resolve => setTimeout(resolve, delay)); //after the delay resolve the promise
}
