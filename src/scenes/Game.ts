import { Container } from "pixi.js";
import { Circle } from "../objects/Circle";

export class Game extends Container {
    constructor(){
        super()
    }

    public start(){
        const cirlce = new Circle()
        this.addChild(cirlce)

    }
}