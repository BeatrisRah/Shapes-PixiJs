import { Shape } from "./Shape";

export class Rectangle extends Shape{
    init(): void {
        this.rect(0, 0, this.defaultSize, this.defaultSize).fill(this.color)
        
    }
}