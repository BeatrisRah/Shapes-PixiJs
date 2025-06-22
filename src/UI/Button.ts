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

        this.x = x;
        this.y = y;

        this.bg = new Graphics()
            .roundRect(0, 0, this.size, this.size)
            .fill('#232b2b');

        
        this.labelBtn = new Text({
            text: label,
            style: {
                align: 'center',
                fill:'#E5E5E5'
            }
        })

        this.labelBtn.anchor.set(0.5)

        this.labelBtn.x = this.size / 2;
        this.labelBtn.y = this.size / 2;

        this.addChild(this.bg, this.labelBtn);

        this.eventMode = 'static';
        this.cursor = 'pointer'; 
        this.on('pointerdown', onClick)

    }
}