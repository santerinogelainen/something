import {Tile} from "../core/tile";
import * as THREE from "three";

export class WoodTile implements Tile {

    material = new THREE.MeshBasicMaterial({color: 0xDEB887});

}