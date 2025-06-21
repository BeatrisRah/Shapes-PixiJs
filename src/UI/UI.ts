import { Container } from "pixi.js";
import { Button } from "./Button";

export class UI extends Container{
    private _currShapesCount: number = 0;

    // hard coded for now so not best for a scaling
    private circleButtonCreate: Button;
    private recButtonCreate: Button;
    private stareButtonCreate: Button;
    
    constructor(){
        super({isRenderGroup:true});

        this.circleButtonCreate = new Button({x: 0, y: 0, label:'Circle', onClick: () => null});
        this.recButtonCreate = new Button({x: 0, y: 0, label:'Circle', onClick: () => null});
        this.stareButtonCreate = new Button({x: 0, y: 0, label:'Circle', onClick: () => null});
    }
}