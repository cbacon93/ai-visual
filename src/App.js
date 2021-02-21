import React, { Component } from 'react';
import * as PIXI from 'pixi.js'
import Navigation from "./components/navigation";
import Entity from "./objects/entity.js"
import Target from "./objects/target.js"
import Genetic from "./algorithm/genetic.js"
import './App.css'


class App extends Component {
  pixi = PIXI.Application;
  pixiCanvas: HTMLDivElement;

  state =  {
    is_running: false,
    sim_iterations: 0,
    sim_roundtime: 0,
    sim_total_time: 0,
    generations: []
  };

  entities = [];
  target = Target;

  settings =
  {
    ai_selection: 0,
    nchildren: 100,
    sel_cutoff: 20,
    mut_chance: 20,
    mut_amt: 20
  };

  componentDidMount() {
    this.pixi = new PIXI.Application(
      {
        width: 800,
        height: 600,
        resolution: devicePixelRatio || 1,
        backgroundColor: 0xfff0ff
      }
    );

    this.pixiCanvas.appendChild(this.pixi.view);
    this.pixi.ticker.add(this.simulate);
    this.target = new Target(this.pixi.view.width / 2, 50);
    this.pixi.stage.addChild(this.target.sprite);
    this.reset();
  }

  reset = () => {
    //remove all from scene
    for (const entity of this.entities) {
      this.pixi.stage.removeChild(entity.sprite);
    }

    let entities = [];
    for(let i=0; i < this.settings.nchildren; i++) {
      entities.push(new Entity(this.pixi.view.width / 2, this.pixi.view.height- 20));
    }
    this.entities = entities;

    //add all to scene
    for (const entity of this.entities) {
      this.pixi.stage.addChild(entity.sprite);
    }

    this.setState({
      sim_roundtime: 0,
      sim_total_time: 0,
      sim_iterations: 0,
      generations: []
    });

    //initialize
    Genetic.setup(this.entities);
  }

  resetEntities = () => {
    for (const entity of this.entities) {
      entity.reset();
      Genetic.reset(this.entities);
    }
  }

  render = () => {
    console.log(this.state);
    return (
      <div className="App">
        <Navigation
          parentState={this.state}
          onChange={this.handleSettingsChange}
          onStartStop={this.handleUserStartStop}
          onReset={this.handleUserReset} />
        <div ref={(thisDiv) => {this.pixiCanvas = thisDiv}} />
      </div>
    );
  }

  handleUserReset = () => {
    this.reset();
  }

  handleUserStartStop = () => {
    this.setState({
      is_running: !this.state.is_running
    });

  }


  handleSettingsChange = (settings) => {
    this.settings = settings;
  }


  calculateEntityPoints = (delta) => {
    for (const entity of this.entities) {
      entity.age += delta;
      let dx = entity.sprite.x - this.target.sprite.x;
      let dy = entity.sprite.y - this.target.sprite.y;
      let dist = Math.sqrt(dx * dx + dy * dy);

      entity.points += (200-dist) * delta;// * entity.age;

    }
  }


  simulate = (delta) => {
    if (this.state.is_running) {
      this.setState({
        sim_roundtime: this.state.sim_roundtime + delta,
        sim_total_time: this.state.sim_total_time + delta
      });
      let has_task = Genetic.simulate(delta, this.entities);
      this.calculateEntityPoints(delta);

      //end simulation and adjust learning model
      if (this.sim_roundtime >= 300 || !has_task) {
        let best_pts = Genetic.improve(this.entities, this.settings);
        this.resetEntities();

        let generations = this.state.generations;
        generations.push({gen: this.state.sim_iterations, best: best_pts});
        this.setState({
          sim_roundtime: 0,
          sim_iterations: this.state.sim_iterations +1,
          generations: generations
        });
      }
    }
  }
}

export default App;
