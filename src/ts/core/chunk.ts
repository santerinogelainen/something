import { Size2D, Position2D } from "./helpers";
import {Group} from "../core/group";
import { Drawable } from "./drawable";

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
        this.worldPosition.x = x;
        this.worldPosition.y = y;
    }

    addDrawable(d: Drawable) {
        this.group.add(d.shape);
    }
}