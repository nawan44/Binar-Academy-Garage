import React, { Component } from 'react'
import { Form, FormGroup, Input, Col, Label, Button} from 'reactstrap';

export default class Sign extends Component {
  
  render() {
    return (
         <Form className="MemberForm" >
    <Label className="MemberFormLabel">
            Register
        </Label>

       <FormGroup row>
        <Col >
           <Input className="MemberRegisterInput"
           type="name" name="name" id="Name" placeholder="Full Name" />
         </Col>
       </FormGroup> 
        <FormGroup row>
        
         <Col >
            <Input className="MemberInput"
            type="email" name="email" id="Email" placeholder="Email" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col >
            <Input  className="MemberRegisterInput"
            type="password" name="password" id="examplePassword" placeholder="Password " />
          </Col>
        </FormGroup>
        <FormGroup row>
        
         <Col >
            <Input className="MemberRegisterInput"
            name="number" id="number"
            placeholder="Phone Number" />
          </Col>
        </FormGroup>        
        
        <FormGroup check row>
          <Col >
            <Button className="MemberButton"  >
        Register</Button>
          </Col>
        </FormGroup>
      </Form>

    )
  }
}
