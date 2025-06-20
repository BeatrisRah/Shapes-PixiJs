import { Shape } from "./Shape";

export class Circle extends Shape {
    init(): void {
        this.circle(0, 0, this.defaultSize).fill(this.color)
        
    }
}