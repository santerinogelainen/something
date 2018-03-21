import { Drawable } from "./drawable";
import { Size2D } from "./helpers";
import { Tile } from "./tile";
import * as THREE from "three";

export class Wall extends Drawable {
    tileSize: Size2D;

    constructor(tileWidth: number, tileHeight: number, tile?: Tile) {
        super();

        this.updateTileSize(tileWidth, tileHeight);

        if (tile != null) {
            this.setMaterial(tile.material);
        }
        
        this.updateShape();
    }

    updateTileSize(width: number, height: number) {
        this.tileSize = {
            width: width,
            height: height
        }

        this.setGeometry(
            new THREE.PlaneGeometry(this.tileSize.width * Tile.size.width, 
                this.tileSize.height * Tile.size.height
        ));

        this.updateShape();
    }
}