import { Drawable } from "./drawable";
import { Position2D } from "./helpers";
import { Tile } from "./tile";

export class WorldObject extends Drawable {
    
    chunkPosition: Position2D = {
        x: 0,
        y: 0
    }

    setX(chunkX: number) {
        this.chunkPosition.x = chunkX;
        super.setX(chunkX * Tile.size);
    }

    setY(chunkY: number) {
        this.chunkPosition.y = chunkY;
        super.setY(chunkY * Tile.size);
    }

}