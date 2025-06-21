import { Container, Graphics, Text } from "pixi.js";

interface ButtonOptinos {
    x: number,
    y: number,
    label: string
    onClick: () => void
}

export class Button extends Container{
    private bg: Graphics;
    private labelBtn: Text;
    private size: number = 100;
    constructor(optins: ButtonOptinos){
        super();

        const {x, y, label, onClick} = optins;

        this.bg = new Graphics()
            .roundRect(x, y, this.size, this.size)
            .stroke(0x00ff00);
        
        this.labelBtn = new Text({text: label})

        this.addChild(this.bg, this.labelBtn);

        this.on('pointerdown', onClick)

    }
}