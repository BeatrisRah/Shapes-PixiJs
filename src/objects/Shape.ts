import { Graphics, FederatedPointerEvent, Point } from "pixi.js";

export abstract class Shape extends Graphics{
    protected _defaultSize: number = 100;
    private _dragging: boolean = false;
    private dragOffset: { x: number; y: number } = { x: 0, y: 0 };
    public color: string;

    constructor(){
        super();
        this.color = this.generateColor();
        this.init();

        this.interactive = true;
        this.cursor = 'pointer';

        this.on('pointerdown', this._onDragStart.bind(this));    
    }

    get defaultSize(){
        return this._defaultSize
    }

    abstract init(): void;

    generateColor(): string{
        const letters = '0123456789ABCDEF';
        let color = '#';
        
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        
        return color;
    }

    private _onDragStart(event:FederatedPointerEvent) {
        this._dragging = true;
        const pos = event.getLocalPosition(this.parent);
        this.dragOffset.x = this.x - pos.x;
        this.dragOffset.y = this.y - pos.y;

        this.emit('moveToFront');

        window.addEventListener('pointermove', this._onGlobalPointerMove);
        window.addEventListener('pointerup', this._onGlobalPointerUp);
    }

    private _onGlobalPointerMove = (event: PointerEvent): void => {
        if (!this._dragging) return;


        const global = new Point(event.clientX, event.clientY);
        const pos = this.parent.toLocal(global);

        this.x = pos.x + this.dragOffset.x;
        this.y = pos.y + this.dragOffset.y;
    };
    
    private _onGlobalPointerUp = (): void => {
        this._dragging = false;
        window.removeEventListener('pointerup', this._onGlobalPointerUp);
    };
}