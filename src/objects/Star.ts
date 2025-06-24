import { Shape } from "./Shape";

export class Star extends Shape{
    init(): void {
        this.star(0 ,0, 5, this.defaultSize).fill(this.color)
        
    }
}