import { Size2D, Position2D } from "./helpers";
import {Group} from "../core/group";
import { Drawable } from "./drawable";
import { Tile } from "./tile";
import * as THREE from "three";

export class Chunk extends Group {

    worldPosition: Position2D = {
        x: 0,
        y: 0
    }

    tileSize: Size2D = {
        width: 20,
        height: 20
    }

    constructor(x: number, y: number) {
        super();
        this.setX(x);
        this.setY(y);
        this.addGrid();
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
        this.group.position.x = this.worldPosition.x * this.tileSize.width * Tile.size;
        this.group.position.y = this.worldPosition.y * this.tileSize.height * Tile.size;
    }

    addDrawable(d: Drawable) {
        this.group.add(d.shape);
    }

    addGrid() {
        this.group.add(new THREE.GridHelper(this.tileSize.width * Tile.size, this.tileSize.width));
    }
}