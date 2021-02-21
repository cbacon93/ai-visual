import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
import SelectDropdown from './selectDropdown';

class Navigation extends Component {
  algorithms = [
    {id: 0, name: "Genetic"},
    //{id: 1, name: "Network"},
  ];

  state = {
    ai_selection: 0,
    nchildren: 100,
    sel_cutoff: 20,
    mut_chance: 20,
    mut_amt: 20
  };


  render() {
    return (
      <nav className="sidebar">
        <h1>AI Visual</h1>
        <hr />
        <SelectDropdown
          items={this.algorithms}
          selected={this.state.ai_selection}
          onSelect={this.handleAiSelect}
        />


        Generation {this.props.parentState.sim_iterations} <br />
        Current time {Math.round(this.props.parentState.sim_roundtime)} <br />
        Total time {Math.round(this.props.parentState.sim_total_time)} <br />

        {(function () {
          if (this.props.parentState.is_running) {
            return <Button className="m-2" variant="warning" onClick={this.props.onStartStop}>Pause</Button>
          } else {
            return <Button className="m-2" variant="success" onClick={this.props.onStartStop}>Start</Button>
          }
        }).call(this)}

        <Button className="m-2" variant="danger" onClick={this.props.onReset}>Reset</Button>

        <Form.Group className="m-2" controlId="formBasicRangeCustom">
          <Form.Label>Number of children: {this.state.nchildren}</Form.Label>
          <Form.Control name="nchildren" onChange={this.handleRangeSelect} type="range" min="10" max="500" step="10" value={this.state.nchildren} custom />
        </Form.Group>

        <Form.Group className="m-2" controlId="formBasicRangeCustom">
          <Form.Label>Selection cutoff: {this.state.sel_cutoff}%</Form.Label>
          <Form.Control name="sel_cutoff" onChange={this.handleRangeSelect} type="range" min="1" max="100" step="1" value={this.state.sel_cutoff} custom />
        </Form.Group>

        <Form.Group className="m-2" controlId="formBasicRangeCustom">
          <Form.Label>Mutation chance: {this.state.mut_chance}%</Form.Label>
          <Form.Control name="mut_chance" onChange={this.handleRangeSelect} type="range" min="1" max="100" step="1" value={this.state.mut_chance} custom />
        </Form.Group>

        <Form.Group className="m-2" controlId="formBasicRangeCustom">
          <Form.Label>Mutation amount: {this.state.mut_amt}%</Form.Label>
          <Form.Control name="mut_amt" onChange={this.handleRangeSelect} type="range" min="1" max="1000" step="1" value={this.state.mut_amt} custom />
        </Form.Group>

        Generations:<br />
        <ul>
        {this.props.parentState.generations.slice(0).reverse().slice(0, 10).map((gen) => {
          return <li key={gen.gen}>G{gen.gen} = {Math.round(gen.best)}</li>
        })}
        </ul>
      </nav>
    );
  }

  handleAiSelect = (item) => {
    this.setState({
      ai_selection: item
    });
    this.props.onChange(this.state);
  };

  handleRangeSelect = (e) => {
    let change = {};
    change[e.target.name] = e.target.value;
    this.setState(change);
    this.props.onChange(this.state);
  };

}

export default Navigation;
