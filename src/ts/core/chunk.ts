import { Size2D, Position2D, degreesToRadians } from "./helpers";
import {Group} from "../core/group";
import { Drawable } from "./drawable";
import { Tile } from "./tile";
import { DEBUG } from "./settings";
import * as THREE from "three";

export class Chunk extends Group {

    worldPosition: Position2D = {
        x: 0,
        y: 0
    }

    static tileSize: Size2D = {
        width: 20,
        height: 20
    }

    constructor(x: number, y: number) {
        super();
        this.setX(x);
        this.setY(y);
        if (DEBUG) {
            this.addGrid();
        }
    }

    setX(newx: number) {
        this.worldPosition.x = newx;
        this.updateGroupPosition();
    }

    setY(newy: number) {
        this.worldPosition.y = newy;
        this.updateGroupPosition();
    }

    private updateGroupPosition() {
        this.group.position.x = this.worldPosition.x * Chunk.tileSize.width * Tile.size;
        this.group.position.y = this.worldPosition.y * Chunk.tileSize.height * Tile.size;
    }

    addDrawable(d: Drawable) {
        this.group.add(d.shape);
    }

    /**
     * Add a grid to the chunk
     */
    addGrid() {
        let helper = new THREE.GridHelper(Chunk.tileSize.width * Tile.size, Chunk.tileSize.width);
        helper.rotateX(degreesToRadians(90));
        this.group.add(helper);
    }
    
}