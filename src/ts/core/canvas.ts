import * as THREE from "three";
import { Drawable } from "../core/drawable";
import { Group } from "./group";
import { Chunk } from "./chunk";
import { Tile } from "./tile";
import { DEBUG } from "./settings";

export class Canvas {

    scene: THREE.Scene;
    camera: THREE.OrthographicCamera;
    renderer: THREE.Renderer;
    controls: THREE.OrbitControls;
    width: number;
    height: number;
    loopRunning: boolean = false;

    constructor() {
        // calculate dimensions
        this.calcWidth();
        this.calcHeight();

        //set scene, camera and renderer
        this.loadScene();
        this.loadCamera();
        this.loadRenderer();

        // add debug thingies
        if (DEBUG) {
            this.addOrbitControls();
        }

        // start the loop
        this.startLoop();
    }

    /**
     * Make the camera look at a drawable
     * @param x drawable you want the camera to look at
     */
    lookAt(x: Drawable) {
        this.camera.lookAt(x.shape.position);
    }

    /**
     * Append a drawable to the canvas
     * @param x Drawable
     */
    append(x: Drawable | Group) {
        if (x instanceof Drawable) {
            this.scene.add(x.shape);
        } else {
            this.scene.add(x.group);
        }
    }

    /**
     * Update the size of the canvas, camera, renderer etc
     */
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
        this.update();
    }

    /**
     * Update the renderer
     */
    update() {
        this.controls.update();
        this.render();
    }

    /**
     * Start the "game loop"
     */
    startLoop() {
        window.requestAnimationFrame(this.loop);
        this.loopRunning = true;
    }

    /**
     * Stop the "game loop"
     */
    stopLoop() {
        this.loopRunning = false;
    }


    /**
     * "game loop"
     */
    loop = () => {
        if (this.loopRunning) {
            requestAnimationFrame(this.loop);
        }

        this.update();
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

    /**
     * Load the scene into memory
     */
    loadScene(): void {
        this.scene = new THREE.Scene();
    }

    /**
     * Load the camera into memory
     */
    loadCamera(): void {
        this.camera = new THREE.OrthographicCamera(this.width / -2, this.width / 2, this.height / 2, this.height / -2);
        this.camera.position.set(0, 0, 50);
    }

    /**
     * Load the renderer into memory
     */
    loadRenderer(): void {
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(this.width, this.height);
        // append the dom element
        $("#canvas-frame")[0].appendChild(this.renderer.domElement);
    }

    /**
     * Add orbitcontrols into the canvas
     */
    addOrbitControls(): void {
        this.controls = new THREE.OrbitControls(this.camera);
        this.controls.update();
    }

    /**
     * Render the canvas
     */
    render(): void {
        this.renderer.render(this.scene, this.camera);
    }
}