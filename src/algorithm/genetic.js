

class Genetic {
  static setup = (entities) => {

    for (const entity of entities) {
      entity.instr = [];

      for (let j = 0; j < 20; j++) {
        let instr = {
          x: Math.random()*2-1,
          y: Math.random()*2-1,
          time: Math.random() * 20
        };
        entity.instr.push(instr);
      }
    }

    this.reset(entities);
  }

  static reset = (entities) => {
    for (const entity of entities) {
      entity.instr_ptr = 0;
      entity.instr_tmr = 0;
    }
  }

  static simulate = (delta, entities) => {
    let has_task = false;

    for (const entity of entities) {
      let entity_delta = delta;
      do {
        if (entity.instr_ptr >= entity.instr.length) {
          entity_delta = 0;
          break;
        }
        let instr = entity.instr[entity.instr_ptr];
        has_task = true;

        let instr_delta = (entity_delta <= instr.time-entity.instr_tmr)? entity_delta : instr.time-entity.instr_tmr;

        entity.sprite.x += instr.x * instr_delta;
        entity.sprite.y -= instr.y * instr_delta;

        entity.instr_tmr += instr_delta;
        entity_delta -= instr_delta;
        if (entity.instr_tmr >= instr.time) {
          entity.instr_ptr++;
          entity.instr_tmr = 0;
        }
      } while (entity_delta > 0);
    }

    return has_task;
  }

  static cutValue = (value, min, max) => {
    if (value > max) return max;
    if (value < min) return min;
    return value;
  }

  static mutate = (instructions, settings) => {
    var instructions_cpy = instructions.map(a => Object.assign({}, a));;
    for (const instr of instructions_cpy) {
      if (Math.random()*100 < settings.mut_chance) {
        instr.x += (Math.random()*2-1)*2*settings.mut_amt/100;
        instr.x = this.cutValue(instr.x, -2, 2);
        instr.y += (Math.random()*2-1)*2*settings.mut_amt/100;
        instr.y = this.cutValue(instr.y, -2, 2);
        instr.time += (Math.random()*2-1)*30*settings.mut_amt/100;
        instr.time = this.cutValue(instr.time, 0, 30);
      }
    }
    return instructions_cpy;
  }


  static improve = (entities, settings) => {
    let best_pts = 0;

    //do selection
    var selection = [];
    entities.sort((a, b) => { return b.points - a.points;});
    best_pts = entities[0].points;

    let sel_cutoff = Math.floor(settings.sel_cutoff / 100 * entities.length);
    for (let i=0; i < sel_cutoff; i++) {
      selection.push(entities[i]);
    }

    //do mutation and spread genes
    for (let i=0; i < entities.length; i++) {
      entities[i].instr = this.mutate(selection[i%sel_cutoff].instr, settings);
    }

    return best_pts;
  }

}

export default Genetic;
