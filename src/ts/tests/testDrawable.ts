import {expect} from "chai";
import "mocha";
import { Drawable } from "../core/drawable";
import * as THREE from "three";


describe("Drawable class", () => {

    let drawable = new Drawable();

    it("update x", () => {
        drawable.x = 10;
        expect(drawable.position.x).to.equal(10);
        expect(drawable.shape.position.x).to.equal(10);
    });

    it("update y", () => {
        drawable.y = 10;
        expect(drawable.position.y).to.equal(10);
        expect(drawable.shape.position.y).to.equal(10);
    });

    it("update z-index", () => {
        drawable.zindex = 10;
        expect(drawable.zindex).to.equal(10);
        expect(drawable.shape.position.z).to.equal(10);
    });

    it("update geometry", () => {
        let geometry = new THREE.BoxGeometry(20, 20, 20);
        drawable.setGeometry(geometry);
        expect(drawable.geometry).to.equal(geometry);
    });

    it("update material", () => {
        let material = new THREE.MeshBasicMaterial({color: 0x0000ff});
        drawable.setMaterial(material);
        expect(drawable.material).to.equal(material);
        expect((<THREE.MeshBasicMaterial>drawable.material).color.getHex()).to.equal(0x0000ff);
    });

});