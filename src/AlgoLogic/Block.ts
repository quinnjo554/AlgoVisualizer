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
    ctx.fillStyle = 'Blue';
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