import * as PIXI from 'pixi.js'
import bunny from '../assets/bunny.png'

class Entity {
  start_x = 0;
  start_y = 0;
  sprite = undefined;
  age = 0;
  points = 0;
  reatched_target = false;

  constructor(x, y) {
    this.start_x = x || 0;
    this.start_y = y || 0;

    this.sprite = PIXI.Sprite.from(bunny);
    this.sprite.anchor.set(0.5);

    this.reset();
  }

  reset() {
    this.sprite.x = this.start_x;
    this.sprite.y = this.start_y;

    this.age = 0;
    this.points = 0;
    this.reatched_target = false;
  }
}


export default Entity;
