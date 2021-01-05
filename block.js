export class Block{
    constructor(width, height, x, y){
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.maxX = width + x;
        this.maxY = height + y;
    }

    draw(ctx){
        const gap_x = 80;
        const gap_y = 60;
        
        ctx.fillStyle = '#fc3588'
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.fill();

        ctx.fillStyle = '#2a0045';
        ctx.beginPath();
        ctx.moveTo(this.maxX, this.maxY);
        ctx.lineTo(this.maxX - gap_x, this.maxY + gap_y);
        ctx.lineTo(this.x - gap_x, this.maxY + gap_y);
        ctx.lineTo(this.x, this.maxY);
        ctx.fill();

        ctx.fillStyle = '#7d002e';
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x - gap_x, this.y + gap_y);
        ctx.lineTo(this.x - gap_x, this.y + gap_y + this.height); 
        ctx.lineTo(this.x, this.maxY);
        ctx.fill();
    }
}