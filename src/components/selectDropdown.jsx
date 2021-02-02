import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap';
import './navigation.css'
import 'bootstrap/dist/css/bootstrap.min.css';

class SelectDropdown extends Component {

  render() {
    return (
      <Dropdown className="m-2">
        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
          {this.props.items[this.props.selected].name}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {this.props.items.map((item) =>
            <Dropdown.Item onClick={() => { this.props.onSelect(item.id) }}>{item.name}</Dropdown.Item>
          )}
        </Dropdown.Menu>
      </Dropdown>
    );
  }

}

export default SelectDropdown;
