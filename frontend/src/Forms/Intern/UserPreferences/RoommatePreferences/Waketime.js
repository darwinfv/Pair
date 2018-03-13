import React, { Component } from 'react';
import { Col } from 'react-bootstrap'
import { DropDownMenu, MenuItem } from 'material-ui'
//import './Bedtime.css';

class Waketime extends Component {
  render() {
    let items = []
    for (let i = 1; i <= 12; i++) {
      items.push(<MenuItem value={i} key={i} primaryText={`${i} AM`} />)
    }
    for (let i = 13; i <= 24; i++) {
      items.push(<MenuItem value={i} key={i} primaryText={`${i - 12} PM`} />)
    }
    
    return (
      <div>
        <Col xs={6}>
          <Col xs={8}>What time do you like to go to bed?</Col>
          <Col xs={4}>
            <DropDownMenu maxHeight={250} value={this.props.dv} onChange={this.props.waketimeChange}>
              {items}
            </DropDownMenu>
          </Col>
        </Col>
      </div>
    );
  }
}

export default Waketime;