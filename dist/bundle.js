!function(t){var e={};function o(i){if(e[i])return e[i].exports;var n=e[i]={i:i,l:!1,exports:{}};return t[i].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=e,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:i})},o.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=14)}([function(t,e){t.exports=THREE},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(){}return t.size=20,t}();e.Tile=i},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=o(0),n=function(){function t(){this.geometry=new i.PlaneGeometry(20,20),this.material=new i.MeshBasicMaterial({color:16711680}),this.shape=new i.Mesh(this.geometry,this.material),this._position={x:0,y:0,z:0}}return t.prototype.updateShape=function(t){this.shape=null!=t?t:new i.Mesh(this.geometry,this.material)},t.prototype.setGeometry=function(t){this.geometry=t,this.updateShape()},t.prototype.setMaterial=function(t){this.material=t,this.updateShape()},t.prototype.setX=function(t){this._position.x=t,this.shape.position.x=t},t.prototype.setY=function(t){this._position.y=t,this.shape.position.y=t},Object.defineProperty(t.prototype,"zindex",{get:function(){return this._position.z},set:function(t){this._position.z=t,this.shape.position.z=t},enumerable:!0,configurable:!0}),t.prototype.setPosition=function(t){this.setX(t.x),this.setY(t.y)},Object.defineProperty(t.prototype,"position",{get:function(){return{x:this._position.x,y:this._position.y}},enumerable:!0,configurable:!0}),t}();e.Drawable=n},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=o(0),n=function(){return function(){this.group=new i.Group}}();e.Group=n},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=o(0),n=function(){return function(){this.material=new i.MeshBasicMaterial({color:14596231})}}();e.WoodTile=n},function(t,e,o){"use strict";var i,n=this&&this.__extends||(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])},function(t,e){function o(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)});Object.defineProperty(e,"__esModule",{value:!0});var r=o(2),s=o(1),a=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.chunkPosition={x:0,y:0},e}return n(e,t),e.prototype.setX=function(e){this.chunkPosition.x=e,t.prototype.setX.call(this,e*s.Tile.size)},e.prototype.setY=function(e){this.chunkPosition.y=e,t.prototype.setY.call(this,e*s.Tile.size)},e}(r.Drawable);e.WorldObject=a},function(t,e,o){"use strict";var i,n=this&&this.__extends||(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])},function(t,e){function o(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)});Object.defineProperty(e,"__esModule",{value:!0});var r=o(1),s=o(0),a=function(t){function e(e,o,i){var n=t.call(this)||this;return n.tile=i,n.updateTileSize(e,o),n.setMaterial(n.tile.material),n.updateShape(),n}return n(e,t),e.prototype.updateTileSize=function(t,e){this.tileSize={width:t,height:e},this.setGeometry(new s.PlaneGeometry(this.tileSize.width*r.Tile.size,this.tileSize.height*r.Tile.size)),this.updateShape()},e}(o(5).WorldObject);e.Wall=a},function(t,e,o){"use strict";var i,n=this&&this.__extends||(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])},function(t,e){function o(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)});Object.defineProperty(e,"__esModule",{value:!0});var r=o(3),s=o(1),a=o(0),c=function(t){function e(e,o){var i=t.call(this)||this;return i.worldPosition={x:0,y:0},i.tileSize={width:20,height:20},i.setX(e),i.setY(o),i.addGrid(),i}return n(e,t),e.prototype.setX=function(t){this.worldPosition.x=t,this.updateGroupPosition()},e.prototype.setY=function(t){this.worldPosition.y=t,this.updateGroupPosition()},e.prototype.updateGroupPosition=function(){this.group.position.x=this.worldPosition.x*this.tileSize.width*s.Tile.size,this.group.position.y=this.worldPosition.y*this.tileSize.height*s.Tile.size},e.prototype.addDrawable=function(t){this.group.add(t.shape)},e.prototype.addGrid=function(){this.group.add(new a.GridHelper(this.tileSize.width*s.Tile.size,this.tileSize.width))},e}(r.Group);e.Chunk=c},function(t,e,o){"use strict";var i,n=this&&this.__extends||(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])},function(t,e){function o(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)});Object.defineProperty(e,"__esModule",{value:!0});var r=o(3),s=o(7),a=o(6),c=o(4),u=function(t){function e(){var e=t.call(this)||this;e.chunkSize={width:5e3,height:5e3};var o=new s.Chunk(0,0),i=new a.Wall(8,1,new c.WoodTile);return o.addDrawable(i),(i=new a.Wall(8,1,new c.WoodTile)).setX(12),o.addDrawable(i),e.addChunk(o),o=new s.Chunk(1,0),i=new a.Wall(20,20,new c.WoodTile),o.addDrawable(i),e.addChunk(o),e}return n(e,t),e.prototype.addChunk=function(t){this.group.add(t.group)},e}(r.Group);e.World=u},function(t,e,o){"use strict";var i,n=this&&this.__extends||(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])},function(t,e){function o(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)});Object.defineProperty(e,"__esModule",{value:!0});var r=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.worldPosition={x:0,y:0},e}return n(e,t),e}(o(2).Drawable);e.Character=r},function(t,e,o){"use strict";var i,n=this&&this.__extends||(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])},function(t,e){function o(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)});Object.defineProperty(e,"__esModule",{value:!0});var r=function(t){function e(){var e=t.call(this)||this;return e.zindex=1,e}return n(e,t),e}(o(9).Character);e.Player=r},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=o(0),n=o(2),r=function(){function t(){var t=this;this.updateSize=function(){t.calcWidth(),t.calcHeight(),t.camera.left=t.width/-2,t.camera.right=t.width/2,t.camera.top=t.height/2,t.camera.bottom=t.height/-2,t.camera.updateProjectionMatrix(),t.renderer.setSize(t.width,t.height),t.controls.update(),t.render()},this.calcWidth(),this.calcHeight(),this.loadScene(),this.loadCamera(),this.loadRenderer()}return t.prototype.lookAt=function(t){this.camera.lookAt(t.shape.position)},t.prototype.append=function(t){t instanceof n.Drawable?this.scene.add(t.shape):this.scene.add(t.group)},t.prototype.calcWidth=function(){return this.width=window.innerWidth,this.width},t.prototype.calcHeight=function(){return this.height=window.innerHeight,this.height},t.prototype.loadScene=function(){this.scene=new i.Scene},t.prototype.loadCamera=function(){this.camera=new i.OrthographicCamera(this.width/-2,this.width/2,this.height/2,this.height/-2,1,1e3),this.controls=new i.OrbitControls(this.camera),this.camera.position.set(0,0,50),this.controls.update()},t.prototype.loadRenderer=function(){this.renderer=new i.WebGLRenderer,this.renderer.setSize(this.width,this.height),$("#canvas-frame")[0].appendChild(this.renderer.domElement)},t.prototype.render=function(){this.renderer.render(this.scene,this.camera)},t}();e.Canvas=r},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=o(11),n=o(10),r=o(8),s=function(){function t(){this.loadCanvas(),this.newPlayer(),this.newWorld(),this.canvas.render()}return t.prototype.loadCanvas=function(){this.canvas=new i.Canvas},t.prototype.newPlayer=function(){this.player=new n.Player,this.canvas.append(this.player)},t.prototype.newWorld=function(){this.world=new r.World,this.canvas.append(this.world)},t}();e.Game=s},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=new(o(12).Game);window.addEventListener("resize",i.canvas.updateSize)},function(t,e,o){t.exports=o(13)}]);
//# sourceMappingURL=bundle.js.map