import { Canvas } from "../core/canvas";
import { Player } from "./player";
import { World } from "./world";

export class Game {

    world: World;
    player: Player;
    canvas: Canvas;

    constructor() {
        this.loadCanvas();
        this.newPlayer();
        this.newWorld();
        this.canvas.render();
    }

    loadCanvas(): void {
        this.canvas = new Canvas();
    }

    newPlayer(): void {
        this.player = new Player();
        this.canvas.append(this.player);
    }

    newWorld(): void {
        this.world = new World();
        this.canvas.append(this.world);
    }

}