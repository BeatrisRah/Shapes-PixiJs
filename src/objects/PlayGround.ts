import { Container, Graphics } from "pixi.js";

export class PLayGround extends Container{
    private defaultWidth: number;
    private background: Graphics;
    private maskGraphics: Graphics;
    constructor(){
        super();

        this.defaultWidth = window.innerWidth * 0.8;
        
        this.background =  new Graphics().rect(0, 0 , this.defaultWidth, 600).fill('#232b2b')
        this.addChildAt(this.background, 0) 

        this.maskGraphics = new Graphics(this.background.context)
        this.addChild(this.maskGraphics);
        this.mask = this.maskGraphics;
    }
}