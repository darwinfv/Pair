import React, { Component } from 'react';
import {Row} from 'react-bootstrap'
import {RaisedButton} from 'material-ui'
import axios from 'axios'
import history from '../../../../history'
import './SubmitButton.css';

axios.defaults.baseURL='http://localhost:9090'

class SubmitButton extends Component {
  constructor(props){
    super(props)
    this.state={
      willRedirect:0,
    }
  }

  buttonSubmit=()=>{
    let firstname=this.props.firstname
    let lastname=this.props.lastname
    let bio=this.props.bio
    let linkedin=this.props.linkedin
    let facebook=this.props.facebook
    let twitter=this.props.twitter

    let that = this
      //console.log(firstname)
      if (lastname == '' || firstname == '') {
        alert("Missing required fields")
      } else {
        axios.post('/UPDATE-PREFERENCES/BASIC-PREFERENCES', {
          "userID": this.props.uid,
          firstName: firstname,
          lastName: lastname,
          description: bio,
          fbLink: facebook,
          twitterLink: twitter,
          linkedInLink: linkedin
        }).then(function (response) {
          if (response.data.status == false) {
            console.log("Something went wrong :(")
          } else {
            console.log("Preferences updated!");
            //Go to preferences p2
            if(that.state.willRedirect===1){
              this.props.changePage(2)
              history.push('/register/intern/preferences/roommate')
            }
          }
        }).catch(function (error) {
          console.log(error);
        });
      }
  }

  bSubmit=()=>{
    this.setState({willRedirect:1})
    this.buttonSubmit()
  }

  render() {
    return (
      <Row className="user-details-buttons">
        <RaisedButton
          label="Save"
          style={{ marginTop: "20px", marginRight:"10px"}}
          primary
          onClick={this.buttonSubmit}
        />
        <RaisedButton
          label="Next"
          style={{ marginTop: "20px", }}
          primary
          onClick={this.bSubmit}
        />
      </Row>
    );
  }
}

export default SubmitButton;