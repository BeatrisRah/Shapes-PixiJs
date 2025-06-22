import { Container } from "pixi.js";
// import { Circle } from "../objects/Circle";
import { UI } from "../UI/UI";

export class Game extends Container {
    private ui: UI = new UI();
    constructor(){
        super();
        this.renderUI()
        
    }

    public start(){
        // const cirlce = new Circle()
        // this.addChild(cirlce)


    }

    private renderUI(){
        this.ui.x = (window.innerWidth / 2) - (this.ui.width / 2);
        this.ui.y = window.innerHeight - (this.ui.height + 10);
        this.ui.zIndex = 999;
        this.addChild(this.ui);
    }
}