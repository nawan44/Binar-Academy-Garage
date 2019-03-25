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
            Sign In
        </Label>

        <FormGroup>
        
       </FormGroup>  
        <FormGroup row>
        
         <Col >
            <Input 
            style ={{margin:'auto', marginBottom:'25px', backgroundColor:'#ffffff', color:'#c4c4c4',
            borderRadius:'3px', height: '65px', width:'589px',
            border:'solid 2px #c4c4c4', fontSize:'24px', color:'c4c4c4',
            lineHeight:'1.41'
            }}
            type="email" name="email" id="exampleEmail"
            placeholder="Email" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col >
            <Input 
                        style ={{margin:'auto',marginBottom:'25px', backgroundColor:'#ffffff', color:'#c4c4c4',
                        borderRadius:'3px', height: '65px', width:'589px',
                        border:'solid 2px #c4c4c4', fontSize:'24px', color:'c4c4c4',
                        lineHeight:'1.41'}}

            type="password" name="password" id="examplePassword" placeholder="Password " />
          </Col>
        </FormGroup>
        
        <FormGroup row>
               <Col >
            <FormGroup check>
              <Label style={{marginTop:'50px', marginLeft:'10px'}} >
                <Input style={{width:'25px', height:'25px', marginLeft:'50px', marginRight:'30px', margin:'auto'}}
  
                              type="checkbox" id="checkbox2" />{' '}
               <h2 style={{color:'#838383', marginLeft:'52px', height:'21px', fontSize:'24px'}}>Remember Me </h2> 
              </Label>
              <Label style={{marginLeft:'152px'}}>
                
               <h2 style={{color:'#838383', marginLeft:'12px', height:'21px', fontSize:'24px'}}>Forget Password </h2> 
              </Label>
            </FormGroup>
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
        
        }} >Sign In</Button>
          </Col>
        </FormGroup>
      </Form>
</div>
    )
  }
}
