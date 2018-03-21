import { Canvas } from "../core/canvas";
import { Player } from "./player";

export class Game {

    player: Player;
    canvas: Canvas;

    constructor() {
        this.loadCanvas();
        this.newPlayer();
        this.canvas.render();
    }

    loadCanvas(): void {
        this.canvas = new Canvas();
    }

    newPlayer(): void {
        this.player = new Player();
        this.canvas.append(this.player);
    }

}