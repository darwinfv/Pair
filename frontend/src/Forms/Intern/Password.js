import React, { Component } from 'react';
import PasswordField from 'material-ui-password-field'
import { grey800, black } from 'material-ui/styles/colors';
import { Row } from 'react-bootstrap'
//import './Password.css';

class Password extends Component {
  constructor(props){
    super(props)
    this.state={
      conditions:null,
    }
  }
  styles = {
    underlineStyle: {
      borderColor: black,
    },
    floatingLabelStyle: {
      color: grey800,
    },
    floatingLabelShrinkStyle: {
      color: black,
    },
    hintStyle: {
      color: grey800,
      fontWeight: "bold",
      textAlign: 'left',
    },
  }

  passChange=(ev)=>{
    if(ev.target.value.length<8){
      this.setState({conditions:{errorText:"Your password is too short"}})
    } else {
      this.setState({conditions:null})
    }
    this.props.changePass(ev.target.value)
  }



  render() {
    return (
      <Row>
        <PasswordField
          className="password"
          hintText="At least 8 characters"
          floatingLabelText="Password"
          floatingLabelStyle={this.styles.floatingLabelStyle}
          floatingLabelShrinkStyle={this.styles.floatingLabelShrinkStyle}
          underlineStyle={this.styles.underlineStyle}
          visibilityIconStyle={{ opacity: '0.8' }}
          fullWidth
          hintStyle={this.styles.hintStyle}
          onChange={this.passChange}
          {...this.state.conditions}
        />
      </Row>
    );
  }
}

export default Password;