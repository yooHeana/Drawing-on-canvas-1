 export class Ball {
    constructor(stageWidth, stageHeight, radius, speed) {
         this.radius = radius;
         this.vx = speed;
         this.vy = speed;

         
         const diameter = this.radius * 2

         this.x = this.radius + (Math.random() * (stageWidth - diameter));
         this.y = this.radius + (Math.random() * (stageHeight - diameter));
    }
 

    draw(ctx, stageWidth, stageHeight, block){
        this.x += this.vx;
        this.y += this.vy;

        this.bounceWindow(stageWidth, stageHeight); // window make the ball bounce
        this.bounceBlock(block); // block make the ball bounce

        ctx.fillStyle = '#ff8e24';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2*Math.PI);
        ctx.fill();
    }

    bounceWindow(stageWidth, stageHeight) {
        //collusion point
        const minX = this.radius; 
        const maxX = stageWidth - this.radius;
        const minY = this.radius;
        const maxY = stageHeight - this.radius;
        
        //bounce
        if (this.x <= minX || this.x >= maxX){
            this.vx *= -1;
            this.x += this.vx;
        } else if (this.y <= minY || this.y >= maxY){
            this.vy *= -1;
            this.y += this.vy;
        }
    }

    bounceBlock(block){
        //collusion point
        const minX = block.x - this.radius;
        const minY = block.y - this.radius;
        const maxX = block.maxX + this.radius;
        const maxY = block.maxY + this.radius;

        if (this.x > minX && this.x < maxX && this.y > minY && this.y <maxY){
            const x1 = Math.abs(minX - this.x);
            const x2 = Math.abs(this.x - maxX);
            const y1 = Math.abs(minY - this.y);
            const y2 = Math.abs(this.y - maxY);
            const min_x = Math.min(x1, x2);
            const min_y = Math.min(y1, y2);
            const min = Math.min(min_x, min_y);

            if (min == min_x){
                this.vx *= -1;
                this.x += this.vx;
            } else if (min == min_y){
                this.vy *= -1;
                this.y += this.vy;
            }
        }
    }
  }