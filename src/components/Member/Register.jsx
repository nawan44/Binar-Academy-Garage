import React, { Component } from 'react'
import { Form, FormGroup, Input, Col, Label, FormText,
    Button} from 'reactstrap';



export default class Sign extends Component {
  
  render() {
    return (
        <div>
    

         <Form style={{
  width: '650px',
  height: '827px',
  backgroundColor: '#ffffff'

         }}>
    <Label style={{color:'#506355', 
        lineHeight:'1.41',
        width: '650px',
        backgroundColor: '#ffffff',
        fontFamily:'roboto',
        fontSize:'36px', fontWeight:'500',
        textAlign:'center', marginTop:'50px', 
        marginBottom:'50px'}}>
            Register
        </Label>

        <FormGroup>
        
       </FormGroup> 
       <FormGroup row>
        
        <Col >
           <Input 
           style ={{margin:'auto', marginBottom:'25px', 
           backgroundColor:'#ffffff',
           borderRadius:'3px', height: '65px', width:'589px',
           border:'solid 2px #c4c4c4', fontSize:'24px', 
           color:'c4c4c4',
           lineHeight:'1.41'
           }}
           type="name" name="name" id="Name"
           placeholder="Full Name" />
         </Col>
       </FormGroup> 
        <FormGroup row>
        
         <Col >
            <Input 
            style ={{margin:'auto',marginBottom:'25px', backgroundColor:'#ffffff', color:'#c4c4c4',
            borderRadius:'3px', height: '65px', width:'589px',
            border:'solid 2px #c4c4c4', fontSize:'24px', color:'c4c4c4',
            lineHeight:'1.41'
            }}
            type="email" name="email" id="Email"
            placeholder="Email" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col >
            <Input 
                        style ={{margin:'auto', marginBottom:'25px',backgroundColor:'#ffffff', color:'#c4c4c4',
                        borderRadius:'3px', height: '65px', width:'589px',
                        border:'solid 2px #c4c4c4', fontSize:'24px', color:'c4c4c4',
                        lineHeight:'1.41'}}

            type="password" name="password" id="examplePassword" placeholder="Password " />
          </Col>
        </FormGroup>
        <FormGroup row>
        
         <Col >
            <Input 
            style ={{margin:'auto', marginBottom:'25px', backgroundColor:'#ffffff', color:'#c4c4c4',
            borderRadius:'3px', height: '65px', width:'589px',
            border:'solid 2px #c4c4c4', fontSize:'24px', color:'c4c4c4',
            lineHeight:'1.41'
            }}
            type="number" name="number" id="number"
            placeholder="Phone Number" />
          </Col>
        </FormGroup>        
        
        <FormGroup check row>
          <Col >
            <Button style={{
                  width: '589px',
                  height: '65px',
                  borderRadius: '5px',
                  backgroundColor: '#2e4ffc',
                  marginLeft:'10px',
                  marginTop:'30px',
                  color:'#ffffff',
                  fontFamily:'roboto',
                  fontSize:'24px',
                  lineHeight:'1.41'
        
        }} >Register</Button>
          </Col>
        </FormGroup>
      </Form>
</div>
    )
  }
}
