import { Size2D } from "../core/helpers";
import { Group } from "../core/group";
import { Chunk } from "../core/chunk";

export class World extends Group {

    chunkSize: Size2D = {
        width: 5000, 
        height: 5000
    }

    addChunk(c: Chunk) {
        this.group.add(c.group);
    }

}