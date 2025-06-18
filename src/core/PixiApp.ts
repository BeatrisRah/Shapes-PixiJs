import { Application } from "pixi.js";


export class PixiApp extends Application {
    constructor() {
        super()   
    }

    public async begin(){
        await this.init({resizeTo:window, background:'#1099bb'})
        document.body.appendChild(this.canvas)
    }
}