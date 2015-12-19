/*!
 * GameState
 * Version: 1.0.0
 * Date: 2015/08/29
 * Source: https://gihub.com/jleelove/TileGame
 *
 * Copyright (c) 2015 Jamie Nichols
 * https://github.com/jleelove/
 * jamie337nichols
 * Jamie337nichols@gmail.com
 */
define(['State','Player','World','Tile'],function(State,Player,World,Tile){
    var ex = 28*Tile.TILEWIDTH;
    var ey = 28*Tile.TILEHEIGHT;

    var GameState = State.extend({
        init:function(_handler){
            this._super(_handler);
            this.player = new Player(_handler,43,43);
            this.world = new World("res/worlds/world1.wrd",_handler);
            this.player.setX(this.world.spawnX);
            this.player.setY(this.world.spawnY);
        },
		tick:function(_dt){
            this.world.tick(_dt);
            this.player.tick(_dt);
        },
		render:function(_g){
            this.world.render(_g);
            this.player.render(_g);
        }
    });

    return GameState;
});