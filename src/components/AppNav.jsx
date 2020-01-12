import { Link } from 'react-router-dom';
import React from 'react';
import {
  Button,
  Collapse,
  Navbar, Card,
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
import logoGarage from '../components/Image/logo.svg';
import AppCarousel from './AppCarousel'
import { MDBCol, MDBIcon } from "mdbreact";


export default class AppNav extends React.Component {
  constructor(props) {
    super(props);

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
         
          <Link to='/home'>
          <img src={logoGarage} style={{
            width: '159px', 
            height: '40px', 
            margin: '50px' }} />
          </Link>
          
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
            <MDBCol md="6">
      <form className="form-inline mt-4 mb-4">
        <MDBIcon icon="search" />
        <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search" aria-label="Search" />
      </form>
    </MDBCol>
              
                  
              
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
      <AppCarousel/>
      </div>
      
    );
  }
}











