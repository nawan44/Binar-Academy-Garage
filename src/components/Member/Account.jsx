import React, { Component } from 'react'
import { Card, CardImg,CardBody, CardTitle, CardSubtitle,  Button,  Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Register from './Register'

import { Link } from 'react-router-dom';

import account from '../Image/account.png'
export default class Account extends Component {
    
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     modal: false
  //   };

  //   this.toggle = this.toggle.bind(this);
  // }

  // toggle() {
  //   this.setState(prevState => ({
  //     modal: !prevState.modal
  //   }));
  // }

  render() {
    return (
        <div>
        <Card style={{ marginTop:'40px',  width:'346px ', height:'381px',
    borderRadius:'5px', boxShadow: '0 4px 4px 0 rgba(0 0 0 0.1)',
    border: 'solid 1px #d6d6d6', backgroundColor: '#ffffff'}} 
        class="p-2 flex-shrink-1 bd-highlight" className="text-center" >
       
         
         <CardImg  className="MemberAccountCardImg" alt="Card image cap" 
          src={account}/>
          <CardBody>
            <CardTitle className="MemberAccountTitle " ><h2 class="MemberAccountTitleH2" >Hi, Bro</h2></CardTitle>
            <CardSubtitle className="MemberAccountSubtitle" >Welcome to The GarageLife</CardSubtitle>

             <Button className="MemberAccountButton">
             <h2  className="MemberAccountButtonH2"
            //  onClick={this.toggle}>
            //  {this.props.buttonLabel} 
            >
            <Link to='/createarticle'>Create Article</Link></h2></Button>

             {/* <Modal  isOpen={this.state.modal} toggle={this.toggle} 
      className={this.props.className}>
        <ModalHeader style={{ width: '675px', height: 'auto',backgroundColor: '#ffffff' }} 
  toggle={this.toggle}></ModalHeader>
        <ModalBody style={{ width: '675px',  height: 'auto', backgroundColor: '#ffffff'}} >
          <Register />
        </ModalBody>
        <ModalFooter style={{width: '675px',  height: 'auto', backgroundColor: '#ffffff', textAlign:'center'

         }} >
         <h4 style={{backgroundColor: '#ffffff', color: '#838383' }} >
         Already have an account ?</h4> 
         <h4 style={{
          backgroundColor: '#ffffff', color: '#2e4ffc' }}>
          Login</h4>
        </ModalFooter>
      </Modal> */}

            </CardBody>
        </Card>
      </div>
    )
  }
}
