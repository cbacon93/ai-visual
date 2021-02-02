import * as PIXI from 'pixi.js'
import carrot from '../assets/carrot.png'

class Target {
  x = 0;
  y = 0;
  sprite = undefined;

  constructor(x, y) {
    this.x = x || 0;
    this.y = y || 0;

    this.sprite = PIXI.Sprite.from(carrot);
    this.sprite.anchor.set(0.5);
    this.sprite.x = this.x;
    this.sprite.y = this.y;
  }
}


export default Target;
