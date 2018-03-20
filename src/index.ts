import {Game} from "./ts/classes/game";

let game = new Game();

window.addEventListener("resize", game.canvas.updateSize);