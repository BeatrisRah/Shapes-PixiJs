import { Container, Graphics } from "pixi.js";
// import { Circle } from "../objects/Circle";
import { UI } from "../UI/UI";
import { shapeTypes } from "../types";
import { Circle } from "../objects/Circle";
import { Rectangle } from "../objects/Rectangle";
import { Star } from "../objects/Star";
import { PLayGround } from "../objects/PlayGround";

export class Game extends Container {
    private ui: UI = new UI();
    private playGround: PLayGround = new PLayGround();
    private shapeCount: number = 0;
    private lastedTouched!: Graphics;
    constructor(){
        super();
        this.renderUI()
        this.renderPlayground()
    }

    public start(){
        // loading logic but no assets to load with this poject

        this.ui.on('shapeCreated', (payload) => this.createShape(payload), this)
    }

    private renderPlayground(){
        this.addChild(this.playGround)

        this.playGround.x = (window.innerWidth - this.playGround.width) / 2
    }
    private renderUI(){
        this.ui.x = (window.innerWidth / 2) - (this.ui.width / 2);
        this.ui.y = window.innerHeight - (this.ui.height + 10);
        this.ui.zIndex = 999;
        this.addChild(this.ui);
    }

    private createShape({type}:{type:shapeTypes}){
        if(this.shapeCount === 10) return;

        this.shapeCount++;
        this.ui.currShapesCount = this.shapeCount

        let shape: Graphics;
        switch(type){
            case "Circle":
                shape = new Circle()
                break;
            case "Rectangle":
                shape = new Rectangle()
                break;
            case "Star":
                shape = new Star()
        }

        shape.on('moveToFront', () => {
            this.lastedTouched = shape;
            this.moveToFront()
        })
        this.playGround.addChild(shape!) //TODO: <-- change to Playground 
    }

    private moveToFront(){
        if(this.playGround.children.length === 0) return;
        this.playGround.setChildIndex(this.lastedTouched, this.playGround.children.length - 1)
    }
}