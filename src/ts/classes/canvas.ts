import * as THREE from "three";
import { Drawable } from "./drawable";

export class Canvas {

    scene: THREE.Scene;
    camera: THREE.OrthographicCamera;
    renderer: THREE.Renderer;
    width: number;
    height: number;

    constructor() {
        // calculate dimensions
        this.calcWidth();
        this.calcHeight();

        //set scene, camera and renderer
        this.loadScene();
        this.loadCamera();
        this.loadRenderer();
    }

    lookAt(x: Drawable) {
        this.camera.lookAt(x.shape.position);
    }

    /**
     * Append a drawable to the canvas
     * @param x Drawable
     */
    append(x: Drawable) {
        this.scene.add(x.shape);
    }

    updateSize = () => {
        // calculate width
        this.calcWidth();
        this.calcHeight();

        //update camera
        this.camera.left = this.width / -2;
        this.camera.right = this.width / 2;
        this.camera.top = this.height / 2;
        this.camera.bottom = this.height / -2;
        this.camera.updateProjectionMatrix();

        // set renderer size
        this.renderer.setSize(this.width, this.height);
        this.render();
    }

    /**
     * Calculate and set the width of the canvas
     * If you want to just get the canvas width use Canvas.width
     * @returns the width of the canvas
     */
    calcWidth(): number {
        this.width = window.innerWidth;
        return this.width;
    }

    /**
     * Calculate and set the height of the canvas
     * If you want to just get the canvas height use Canvas.height
     * @returns the height of the canvas
     */
    calcHeight(): number {
        this.height = window.innerHeight;
        return this.height;
    }

    loadScene(): void {
        this.scene = new THREE.Scene();
    }

    loadCamera(): void {
        this.camera = new THREE.OrthographicCamera(this.width / -2, this.width / 2, this.height / 2, this.height / -2, 1, 1000);
        this.camera.position.set(0, 0, 50);
    }

    loadRenderer(): void {
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(this.width, this.height);
        // append the dom element
        $("#canvas-frame")[0].appendChild(this.renderer.domElement);
    }

    render(): void {
        this.renderer.render(this.scene, this.camera);
    }
}