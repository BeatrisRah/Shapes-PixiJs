import { Shape } from "./Shape";

export class Circle extends Shape {
    init(): void {
        const r = this.defaultSize / 2;
        this.circle(r, r, r).fill(this.color)
        
    }
}