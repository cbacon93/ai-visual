

class Genetic {
  static start = (entities) => {

    for (const entity of entities) {
      entity.instr = [];
      entity.age = 0;

      for (let j = 0; j < 20; j++) {
        let instr = {
          x: Math.random()*2-1,
          y: Math.random()*2-1,
          time: Math.random() * 20
        };
        entity.instr.push(instr);
      }
    }
  }

  static simulate = (delta, entities) => {
    for (const entity of entities) {
      let instr = entity.instr[0];
      if (!instr) continue;

      entity.sprite.x += instr.x * delta;
      entity.sprite.y -= instr.y * delta
      instr.time -= delta;
      if (instr.time <= 0) {
        entity.instr.shift();
      }
    }
  }

}

export default Genetic;
