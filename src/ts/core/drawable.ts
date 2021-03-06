import * as THREE from "three";
import { Position3D, Position2D } from "./helpers";

export class Drawable {

    geometry: THREE.Geometry = new THREE.PlaneGeometry(20, 20);
    material: THREE.Material = new THREE.MeshBasicMaterial({color: 0xff0000});
    shape: THREE.Object3D = new THREE.Mesh(this.geometry, this.material);

    private _position: Position3D = {
        x: 0,
        y: 0,
        z: 0
    }

    updateShape(shape?: THREE.Object3D) {
        if (shape != null) {
            this.shape = shape;
        } else {
            this.shape = new THREE.Mesh(this.geometry, this.material);
        }
    }

    setGeometry(geo: THREE.Geometry) {
        this.geometry = geo;
        this.updateShape();
    }

    setMaterial(material: THREE.Material) {
        this.material = material;
        this.updateShape();
    }

    setX(newx: number) {
        this._position.x = newx;
        this.shape.position.x = newx;
    }

    setY(newy: number) {
        this._position.y = newy;
        this.shape.position.y = newy;
    }

    set zindex(newz: number) {
        this._position.z = newz;
        this.shape.position.z = newz;
    }

    get zindex() {
        return this._position.z;
    }

    setPosition(newposition: Position2D) {
        this.setX(newposition.x);
        this.setY(newposition.y);
    }

    get position(): Position2D {
        return {x: this._position.x, y: this._position.y}
    }
}