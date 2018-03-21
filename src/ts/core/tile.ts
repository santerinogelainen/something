import { Size2D } from "./helpers";
import { Drawable } from "./drawable";

export abstract class Tile {

    material: THREE.Material;

    static size: Size2D = {
        width: 20,
        height: 20
    }
}