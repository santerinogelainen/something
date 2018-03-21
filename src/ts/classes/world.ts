import { Size2D } from "../core/helpers";
import { Group } from "../core/group";
import { Chunk } from "../core/chunk";
import { Wall } from "../core/wall";
import { WoodTile } from "../tiles/wood";

export class World extends Group {

    chunkSize: Size2D = {
        width: 5000, 
        height: 5000
    }

    constructor() {
        super();
        let chunk = new Chunk(0, 0);

        let wall = new Wall(8, 1, new WoodTile());
        chunk.addDrawable(wall);

        wall = new Wall(8, 1, new WoodTile());
        wall.setX(12);
        chunk.addDrawable(wall);
        this.addChunk(chunk);

        chunk = new Chunk(1, 0);
        wall = new Wall(20, 20, new WoodTile());
        chunk.addDrawable(wall);
        this.addChunk(chunk);

    }

    addChunk(c: Chunk) {
        this.group.add(c.group);
    }

}