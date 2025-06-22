import { Container } from "pixi.js";
import { Button } from "./Button";
import { shapeTypes } from "../types";

export class UI extends Container{
    private _currShapesCount: number = 0;

    // hard coded for now so not best for a scaling
    private circleButtonCreate: Button;
    private recButtonCreate: Button;
    private stareButtonCreate: Button;
    
    constructor(){
        super({isRenderGroup:true});

        this.circleButtonCreate = new Button({x: 0, y: 0, label:'Circle', onClick: () => this.createShape('Circle')});
        this.recButtonCreate = new Button({x: 110, y: 0, label:'Rect', onClick: () => this.createShape('Rectangle')});
        this.stareButtonCreate = new Button({x: 220, y: 0, label:'Star', onClick: () => this.createShape('Star')});

        // TODO: Add shapes counter

        this.addChild(this.circleButtonCreate, this.recButtonCreate, this.stareButtonCreate)
    }

    private createShape(typeShape: shapeTypes){
        return this.emit('shapeCreated', {type:typeShape})

    }

    set currShapesCount(newVal:number){
        this._currShapesCount = newVal;
    }
}