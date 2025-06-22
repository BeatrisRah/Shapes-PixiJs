import { Container } from "pixi.js";

export class PLayGround extends Container{
    private defaultWidth: number;
    constructor(){
        super()

        this.defaultWidth = window.innerWidth * 0.9
        this.setSize(this.defaultWidth, 500)

    }
}