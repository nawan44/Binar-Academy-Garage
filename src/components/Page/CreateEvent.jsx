import React, { Component } from 'react';
import { Container, Form, FormGroup, Col, Input, Row, Card,  Label,Button} from 'reactstrap';
import Image from 'react-bootstrap/Image';
import Camera from '../Image/Camera.png';
import AppNav from '../AppNav';
import Footer from '../AppFooter';

export default class CreateEvent extends Component  {
    render() {
        return (

          <div className="BodyDefault" > 
         <AppNav />
          <Container className="CreateEventContainer">
            <h2 className="CreateEventContainerh2"> Create Event</h2>
            <div className="CreateEventContainerDiv" >
            <Label className="CreateEventContainerDivLabel">Event Image
  <br/>
  <small style={{width: '231px',height: '22px', fontFamily: 'Roboto', fontSize: '18px'}} 
  className="text-muted">maksimum size of 775 X 375 px</small>
  </Label>
          <Form className="CreateEventContainerForm" >
              
              <Card className="CreateEventContainerFormCard" >
              <Image src={Camera} className="CreateEventContainerFormImg"  fluid />
              <h2 className="CreateEventContainerFormImgh2"> Upload Image</h2>
              </Card>
              <FormGroup  style={{marginTop:'30px'}}>
              <Label for="eventName" className="CreateEventContainerFormLabel" >Event Name</Label>
          <Input className="CreateEventContainerFormInput" />
          
        </FormGroup>

        <FormGroup  style={{marginTop:'30px'}}>
          <Label className="CreateEventContainerFormLabel" >Location</Label>
          <Input className="CreateEventContainerFormInput"/>
        </FormGroup>
 

            <FormGroup  style={{marginTop:'30px'}}>
              <Label className="CreateEventContainerFormLabel">Event Description</Label>
              <Input className="CreateEventContainerFormInput" style={{ height:'130px'}} type="textarea" name="text" id="exampleText" />
            </FormGroup>
           
            <Label className="CreateEventContainerFormLabel" for="exampleDate">Start Date and Time</Label>   
            <Row form>
          <Col md={6}>
      
            <FormGroup>
            <Input className="CreateEventContainerFormInput" style={{  width: '316.7px', height:'65px'}}
                type="date" name="date" id="exampleDate" placeholder="date placeholder"/>   
              </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
            <Input className="CreateEventContainerFormInput"  style={{  width: '316.7px', height:'65px'}}
                type="time" name="time" id="exampleTime" placeholder="time placeholder"/>
              </FormGroup>
          </Col>
        </Row>
      
        <Label className="CreateEventContainerFormLabel"  for="exampleDate">End Date and Time</Label>   
            <Row form>
          <Col md={6}>
      
            <FormGroup>
            <Input className="CreateEventContainerFormInput" style={{  width: '316.7px', height:'65px'}}
                type="date" name="date" id="exampleDate" placeholder="date placeholder"/>  
            </FormGroup>
          </Col>
          <Col md={6}>

            <FormGroup  >
            <Input className="CreateEventContainerFormInput" style={{  width: '316.7px', height:'65px'}} type="time" name="time" id="exampleTime" placeholder="time placeholder"/>
             
              </FormGroup>
          </Col>
        </Row>
            <Button className="CreateEventContainerFormButton">Publish</Button>
       </Form>
       </div>
     </Container>  
            
    <Footer />
  </div>
          
        );
}
}