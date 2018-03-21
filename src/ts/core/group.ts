import * as THREE from "three";

export abstract class Group {
    group: THREE.Group;

    constructor() {
        this.group = new THREE.Group();
    }
}