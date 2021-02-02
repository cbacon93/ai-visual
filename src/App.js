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
  };
  entities = [];
  target = Target;
  settings =
  {
    ai_selection: 0,
    nchildren: 100,
    sel_cutoff: 10,
    mut_chance: 10,
    mut_amt: 10
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
    this.target = new Target(this.pixi.view.width / 2, 20);
    this.pixi.stage.addChild(this.target.sprite);
    this.resetEntities();
  }

  resetEntities = () => {
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

    //initialize
    Genetic.start(this.entities);
  }

  render = () => {
    console.log(this.state);
    return (
      <div className="App">
        <Navigation onChange={this.handleSettingsChange} />
        <div ref={(thisDiv) => {this.pixiCanvas = thisDiv}} />
      </div>
    );
  }


  handleSettingsChange = (settings) => {
    this.settings = settings;
    this.resetEntities();
  }


  simulate = (delta) => {
    Genetic.simulate(delta, this.entities);
  }
}

export default App;
