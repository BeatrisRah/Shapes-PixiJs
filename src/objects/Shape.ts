import { Graphics, FederatedPointerEvent } from "pixi.js";

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

        this.on('pointerdown', this._onDragStart);
        this.on('pointermove', this._onDragMove);
        this.on('pointerup', this._onDragEnd);
        this.on('pointerupoutside', this._onDragEnd);

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

    _onDragStart(event:FederatedPointerEvent) {
        this._dragging = true;
        const pos = event.data.getLocalPosition(this.parent);
        this.dragOffset.x = this.x - pos.x;
        this.dragOffset.y = this.y - pos.y;
    }

    _onDragMove(event:FederatedPointerEvent) {
        if (!this._dragging) return;
        const pos = event.data.getLocalPosition(this.parent);
        this.x = pos.x + this.dragOffset.x;
        this.y = pos.y + this.dragOffset.y;
    }

    _onDragEnd() {
        this._dragging = false;
    }
    
}