import { Shape } from "./Shape";

export class Star extends Shape{
    init(): void {
        const r = this.defaultSize / 2;
        this.star(r ,r, 5, r).fill(this.color)
        
    }
}