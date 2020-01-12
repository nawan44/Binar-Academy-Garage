import React, { Component } from 'react'

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Sign from './Member/Sign'
import Register from './Member/Register'
import { Link } from 'react-router-dom';


export default class AppNav extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      
      <div style={{marginBottom:'40px'}}>
      NAVBAR
      <Button style={{marginRight:'50px'}} color="danger" onClick={this.toggle}>{this.props.buttonLabel} Sign</Button>
      
      <Modal  isOpen={this.state.modal} toggle={this.toggle} 
      className={this.props.className}>
        <ModalHeader style={{
  width: '675px',
  height: 'auto',
  backgroundColor: '#ffffff'

         }} toggle={this.toggle}></ModalHeader>
        <ModalBody style={{
  width: '675px',
  height: 'auto',
  backgroundColor: '#ffffff'

         }} >
          <Sign />
        </ModalBody>
        <ModalFooter style={{
  width: '675px',
  height: 'auto',
  backgroundColor: '#ffffff', textAlign:'center'

         }} >
         <h4 style={{
  backgroundColor: '#ffffff', color: '#838383'
         }} >Already have an account ?</h4> <h4 style={{
          backgroundColor: '#ffffff', color: '#2e4ffc'
                 }}>Login</h4>
        </ModalFooter>
      </Modal>

<Button style={{backgroundColor:'white', color:'black'}}><Link to='/home'>Home</Link></Button>
<Button style={{backgroundColor:'yellow', color:'black'}}><Link to='/createarticle'>Create Article</Link></Button>
<Button style={{backgroundColor:'white', color:'black'}}><Link to='/createevent'>Create Event</Link></Button>
<Button style={{backgroundColor:'pink', color:'black'}}><Link to='/event'>Event</Link></Button>
<Button style={{backgroundColor:'yellow', color:'black'}}><Link to='/articlecoverimage'>Article Cover Image</Link></Button>
<Button style={{backgroundColor:'white', color:'black'}}><Link to='/detailarticle'>Detail Article</Link></Button>
<Button style={{backgroundColor:'yellow', color:'black'}}><Link to='/profile'>Profile</Link></Button>
<Button style={{backgroundColor:'yellow', color:'black'}}><Link to='/part'>Part Media</Link></Button>
<Button style={{backgroundColor:'white', color:'black'}}><Link to='/profilearticle'>Profile Article</Link></Button>
<Button style={{backgroundColor:'yellow', color:'black'}}><Link to='/profileevent'>Profile Event</Link></Button>

<Button style={{backgroundColor:'yellow', color:'black'}}><Link to='/pageckeeditor'>CKE Editor</Link></Button>
    </div>
    )
  }
}
