import React, { Component } from 'react'
import { Form, FormGroup, Input, Col, Label, Button} from 'reactstrap';



export default class Sign extends Component {
  
  render() {
    return (
        <div>
         <Form className="MemberForm">
    <Label className="MemberFormLabel">
            Sign In
        </Label>
        <FormGroup>
       </FormGroup>  
        <FormGroup row>
         <Col >
            <Input className="MemberInput" placeholder="Email" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col >
            <Input className="MemberInput" type="password" name="password" id="examplePassword" placeholder="Password " />
          </Col>
        </FormGroup>
        <FormGroup row>
               <Col >
            <FormGroup check>
              <Label className="MemberSignLabel">
                <Input className="MemberSignInput"  type="checkbox" id="checkbox2" />{' '}
               <h2 className="MemberSignRemember" >Remember Me </h2> 
              </Label>
              <Label style={{marginLeft:'152px'}}>
                
               <h2 className="MemberSignForget"> Forget Password </h2> 
              </Label>
            </FormGroup>
          </Col>
        </FormGroup>
        <FormGroup check row>
          <Col >
            <Button className="MemberButton">Sign In</Button>
          </Col>
        </FormGroup>
      </Form>
</div>
    )
  }
}
