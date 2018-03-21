import { Size2D } from "./helpers";
import { Tile } from "./tile";
import * as THREE from "three";
import { WorldObject } from "./worldobject";

export class Wall extends WorldObject {

    tile: Tile;
    tileSize: Size2D;

    constructor(tileWidth: number, tileHeight: number, tile: Tile) {
        super();

        this.tile = tile;
        this.updateTileSize(tileWidth, tileHeight);
        this.setMaterial(this.tile.material);
        
        this.updateShape();
    }

    updateTileSize(width: number, height: number) {
        this.tileSize = {
            width: width,
            height: height
        }

        this.setGeometry(
            new THREE.PlaneGeometry(this.tileSize.width * Tile.size, 
                this.tileSize.height * Tile.size
        ));

        this.updateShape();
    }
}