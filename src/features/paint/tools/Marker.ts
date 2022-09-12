import Tool from './Tool';

export default class Marker extends Tool {
  mouseDown = false;
  prevX: number | null = null;
  prevY: number | null = null;
  constructor(canvas: HTMLCanvasElement) {
    super(canvas);
    this.listen();
    this.ctx.globalAlpha = 0.2;
  }

  listen(): void {
    this.canvas.onmousemove = this.mouseMoveHandler.bind(this);
    this.canvas.onmousedown = this.mouseDownHandler.bind(this);
    this.canvas.onmouseup = this.mouseUpHandler.bind(this);
  }

  mouseUpHandler(): void {
    this.mouseDown = false;
    this.prevX = null;
    this.prevY = null;
  }
  mouseDownHandler(e: MouseEvent): void {
    if (!e.target) {
      return;
    }
    const target = e.target as HTMLElement;
    this.mouseDown = true;
    // this.ctx.beginPath();
    // this.ctx.moveTo(e.pageX - target.offsetLeft, e.pageY - target.offsetTop);
    this.ctx.globalAlpha = 0.1;
  }
  mouseMoveHandler(e: MouseEvent): void {
    if (!e.target) {
      return;
    }
    const target = e.target as HTMLElement;
    if (this.mouseDown) {
      this.draw(e.pageX - target.offsetLeft, e.pageY - target.offsetTop);
    }
  }

  draw(x: number, y: number): void {
    if (this.prevX && this.prevY) {
      this.ctx.beginPath();
      // this.ctx.moveTo(this.prevX, this.prevY);
      // this.ctx.lineTo(x, y);
      this.ctx.arc(x, y, 5, 0, 2 * Math.PI);
      this.ctx.fill();
      this.ctx.stroke();
      this.ctx.closePath();
    }
    this.prevX = x;
    this.prevY = y;
  }
}
