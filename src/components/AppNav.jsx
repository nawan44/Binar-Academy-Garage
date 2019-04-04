import React from 'react';
import {
  Button,
  Collapse,
  Navbar,
  NavbarToggler,
  Form,
  FormGroup,
  Input,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import logoGarage from './logoGarage.jpeg';
import searchIcon from '../searchIcon.png';


export default class AppNav extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        
        <Navbar light expand="md"  style={{
          backgroundColor: '#1d1d1d', 
          height: '81px', borderBottom: 
          '3px solid black'}}>
         
          <a href="#">
          <img src={logoGarage} style={{
            width: '159px', 
            height: '40px', 
            margin: '50px' }} />
          </a>
          
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <Form >
                <FormGroup >

                 <div> 
                <Input  type="text" name="email" id="exampleEmail"  placeholder="Search"  maxLength="70" style={{
                  backgroundColor: '#414141', 
                  color: 'white',
                  margin: '20px 20px 20px 20px',
                  position: 'absolute',
                  left: '715px',
                  width: '25%'}} />
                </div>
                </FormGroup>  
              </Form>
              <div style={{}}>
              <Button   style={{
                margin: '20px 0px 0px '}}>
                <img src={searchIcon} style={{
                  width: '20px',
                  height: '20px'}} />
                  </Button>
              </div>
              
                  
              
              {/* <Button></Button> */}
              <NavItem>
                <NavLink href="/components/" style={{
                  color: '#a28858',
                  margin: '20px'}}>Register</NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={{
                  color: '#a28858',
                  margin: '20px'}} href="#">Sign In</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>  

          <div>
          <Navbar light expand="md"  style={{
            backgroundColor: '#1d1d1d', 
            height: '44px'}}>
          
            <div style={{
              position: 'absolute',
              left: '15%'}}>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar> 
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret style={{color: '#a28858'}}>
                    Event
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      Option 1
                    </DropdownItem>
                    <DropdownItem>
                      Option 2
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                      Reset
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Collapse>
            </div>
          
            <div style={{
              position: 'absolute',
              left: '4%'}}>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                  <Nav className="ml-auto" navbar>  
                    <UncontrolledDropdown nav inNavbar >
                      <DropdownToggle nav caret style={{color: '#a28858'}}>
                        Categories
                      </DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem>
                          Option 1
                        </DropdownItem>
                        <DropdownItem>
                          Option 2
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>
                          Reset
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </Nav>
                </Collapse>
            </div>    

        </Navbar>
          </div>      
      </div>
      
    );
  }
}












