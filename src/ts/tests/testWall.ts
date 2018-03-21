import "mocha";
import {expect} from "chai";
import {Wall} from "../core/wall";
import {WoodTile} from "../tiles/wood";
import {Tile} from "../core/tile";
import * as THREE from "three";

describe("Wall class", () => {

    let wall = new Wall(2, 5, new WoodTile());

    it("should be width of 2 tiles", () => {
        expect(wall.tileSize.width).to.equal(2);
        let size: THREE.Vector3 = new THREE.Vector3();
        new THREE.Box3().setFromObject(wall.shape).getSize(size);
        expect(size.x).to.equal(2 * Tile.size.width);
    });

    it("should be height of 5 tiles", () => {
        expect(wall.tileSize.height).to.equal(5);
        let size: THREE.Vector3 = new THREE.Vector3();
        new THREE.Box3().setFromObject(wall.shape).getSize(size);
        expect(size.y).to.equal(5 * Tile.size.height);
    });

    it("change size", () => {
        wall.updateTileSize(4, 6);
    });

    it("should be width of 4 tiles", () => {
        expect(wall.tileSize.width).to.equal(4);
        let size: THREE.Vector3 = new THREE.Vector3();
        new THREE.Box3().setFromObject(wall.shape).getSize(size);
        expect(size.x).to.equal(4 * Tile.size.width);
    });

    it("should be height of 6 tiles", () => {
        expect(wall.tileSize.height).to.equal(6);
        let size: THREE.Vector3 = new THREE.Vector3();
        new THREE.Box3().setFromObject(wall.shape).getSize(size);
        expect(size.y).to.equal(6 * Tile.size.height);
    });

});