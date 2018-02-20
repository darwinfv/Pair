import React, { Component } from 'react';
import {withRouter} from 'react-router'
import { NavLink, Switch, Route, Redirect } from 'react-router-dom'
import { Grid, Row, Col, Image } from 'react-bootstrap'
import PasswordField from 'material-ui-password-field'
import { TextField, RaisedButton } from 'material-ui'
import LoginFormField from './loginFormField.js'
import LoginParagraph from './loginParagraph.js'
import {pinkA200, black} from 'material-ui/styles/colors'
import './form.css';
import history from './history'

class form extends Component {
  state={
    username:null,
    password:null,
  }

  getUser=(username)=>{
    this.setState({username})
    
  }

  getPass=(password)=>{
    this.setState({password})
  }

  handleLogin=()=>{
    const username=this.state.username
    const password=this.state.password
    //kunal code submit here

    console.log(username)
    console.log(password)
    //if doing a fetch use this at the end .then(this.redirect(classification))
    //where classification is whether it is an employee or intern, change the variable however you want
  }

  redirect=(uid)=>{
    this.setState({username:null})
    this.setState({password:null})
    this.props.updateUid(uid)
    if(uid==1)
      return<Redirect to='/employee-landing'/>
    else
      return<Redirect to='/intern-landing'/>
  }

  goToEmployee=()=>{
    history.push('/register')
  }

  render() {
    return (
      <Col xs={12} sm={4} md={4} className="loginForm">
        <div className="co">
          <Row className="title row-sm">
            Login
        </Row>

          <LoginFormField getUser={this.getUser} getPass={this.getPass}/>

          <Row className='row-sm lbutton'>
            <RaisedButton
              label="Login"
              primary
              onClick={this.handleLogin}
            />
          </Row>

          <Row className='row-sm lbutton'>
            <RaisedButton
              label="Company Page"
              primary
              onClick={this.goToEmployee}
            />
          </Row>

          <Row className="row-sm item">
            <LoginParagraph />
          </Row>
        </div>
      </Col>
    );
  }
}

export default form;