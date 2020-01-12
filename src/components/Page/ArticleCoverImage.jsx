import React, { Component } from 'react'
import AppNav from '../AppNav';
import { Container, Row, Card, DropdownToggle, Dropdown, DropdownItem, DropdownMenu} from 'reactstrap';
import AppFooter from '../AppFooter';
import { Button } from 'mdbreact';


export default class ArticleCoverImage extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    return (
      <div className="BodyDefault">
          <AppNav />
        <Container className="PageArticleCoverContainer" >
            <Row>
                <Container className="PageArticleCoverContainerImage">
                <h2 className="PageArticleCoverContainerImageh2" >
                Article Cover Image
                </h2>

                    <Card className="PageArticleCoverContainerCard" >
                    <h3 className="PageArticleCoverContainerCardh3" >
                        maksimum size of 775x375px
                    </h3>
                    <Button className="PageArticleCoverButton">
                        Upload Image
                    </Button>
                   
                    </Card>
                    <Card className="PageArticleCoverCardDrop">
                    <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret={{  position: 'absolute', top: 'calc(50% - 1px)'}}  className="PageArticleCoverDropDownToggle">
         Categories
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem className="PageArticleCoverDropDownItem" >Custom</DropdownItem>
          <DropdownItem className="PageArticleCoverDropDownItem" >Informasi</DropdownItem>
          <DropdownItem className="PageArticleCoverDropDownItem" >Tips & Trik</DropdownItem>
        </DropdownMenu>
      </Dropdown>                
      
      </Card>
      </Container>
            </Row>

        </Container>
<AppFooter/>
      </div>
    )
  }
}


// import React, { Component } from 'react'
// import AppNav from '../AppNav';
// import { Container, Row, Card, Badge, DropdownToggle, Dropdown,
//             DropdownItem, DropdownMenu, Form, Button} from 'reactstrap';
// import AppFooter from '../AppFooter';
// import axios from 'axios';
// import ImageUploader from 'react-images-upload';

// export default class ArticleCoverImage extends Component {

//   constructor(props) {
//     super(props);
//      this.state = { 
//        content: '',
//        picture:[], 
//       products:[]
//     };
//      this.onDrop = this.onDrop.bind(this);
// }


// handleSubmit = event => {
//   event.preventDefault();
//   axios.post('http://reduxblog.herokuapp.com/api/posts?key=barangku',
//   {
//       content: this.state.content
//   }
//   )
//       .then(res => {
//               alert('Masuk Pak Eko')
//               this.onDrop()
//           }
//       )
// }
// onDrop(picture){
//   axios.get('http://reduxblog.herokuapp.com/api/posts?key=barangku')
//   .then(res => {
//       this.setState({
//         content: this.state.content.concat(picture),
//       });
//   });
// }

// componentDidMount(){
//   axios.get('http://reduxblog.herokuapp.com/api/posts?key=barangku')
//   .then(res => {
//       this.setState({
//         products: res.data
//       })
//   });
// }

// imageUpload = (e) => {
//   const file = e.target.files[0];
//   getBase64(file).then(base64 => {
//     localStorage["fileBase64"] = base64;
//     console.debug("file stored",base64);
//   });
// };

// render() {
// return <Form onSubmit={this.handleSubmit}><input 
//  type="file" 
//  id="imageFile" 
//  name='imageFile' 
//  onDrop={this.imageUpload} />
//   <Button color='primary' type="submit" > submit </Button>

//  </Form>;
// }
// }


// const getBase64 = (file) => {
// return new Promise((resolve,reject) => {
//  const reader = new FileReader();
//  reader.onload = () => resolve(reader.result);
//  reader.onerror = error => reject(error);
//  reader.readAsDataURL(file);
// });
// }



// import React, { Component } from 'react'
// import AppNav from '../AppNav';
// import { Container, Row, Card, Badge, DropdownToggle, Dropdown,
//             DropdownItem, DropdownMenu} from 'reactstrap';
// import AppFooter from '../AppFooter';


// export default class ArticleCoverImage extends Component {
//   constructor(props) {
//     super(props);
//     this.toggle = this.toggle.bind(this);
//     this.state = {
//       dropdownOpen: false
//     };
//   }

//   toggle() {
//     this.setState(prevState => ({
//       dropdownOpen: !prevState.dropdownOpen
//     }));
//   }

//   render() {
//     return (
//       <div style ={{ backgroundColor:'#ececec'   }}>
//           <AppNav />
//         <Container style={{marginTop:'70px', marginBottom:'70px'}}>
//             <Row>
//                 <Container style={{width:'877px', height:'625px', borderRadius:'5px',
//                             boxShadow:' 0 4px 4px 0 rgba(0,0,0, 0.1)', backgroundColor:'#ffffff'
//                 }}>
//                 <h2 style={{color:'#8c8c8c', fontSize:'28px', margin:'42px'}}>
//                 Article Cover Image

//                 </h2>
//                     <Card style={{width:'797px', height:'375px', backgroundColor:'#ebebeb'
//                                    , marginTop:'30px' , marginBottom:'30px', marginLeft:'40px', marginRight:'40px',
//                 }}>
//                     <h3 style={{margin:'auto', marginBottom:'21px', color:'#8c8c8c', fontSize:'18px' }}>
//                         minimum size of 775x375px
//                     </h3>
//                     <Badge style={{margin:'auto', backgroundColor:'#2e4ffc', width:'171.4px', height:'45px',
//                                     paddingTop:'10px', fontSize:'20px', color:'#ffffff', textAlign:'center', borderRadius:'99px'
//                                     }}>
//                         Upload Image
//                     </Badge>
                   
//                     </Card>
//                     <Card style={{width:'797px', height:'auto', backgroundColor:'#ffffff'
//                                    , marginTop:'30px' , marginBottom:'30px', marginLeft:'40px', marginRight:'40px'}}>
//                     <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
//         <DropdownToggle caret={{  position: 'absolute',
//      top: 'calc(50% - 1px)'}} 
//      style={{width:'797px', height:'auto', backgroundColor:'#ffffff', 
//       fontFamily: 'Roboto', textAlign:'left',
//       fontSize: '22px',
//       fontWeight: 'normal',
//       fontStyle: 'normal',
//       fontStretch: 'normal',
//       lineHeight: 'normal',
//       letterSpacing: 'normal',
//       color: '#959595'
      
//       }} >
//          Categories
//         </DropdownToggle>
//         <DropdownMenu>
//           <DropdownItem style={{width:'797px', height:'auto', backgroundColor:'#ffffff', 
//       fontFamily: 'Roboto',
//       fontSize: '22px',
//       fontWeight: 'normal',
//       fontStyle: 'normal',
//       fontStretch: 'normal',
//       lineHeight: 'normal',
//       letterSpacing: 'normal',
//       color: '#959595'
      
//       }} >Custom</DropdownItem>
//           <DropdownItem style={{width:'797px', height:'auto', backgroundColor:'#ffffff', 
//       fontFamily: 'Roboto',
//       fontSize: '22px',
//       fontWeight: 'normal',
//       fontStyle: 'normal',
//       fontStretch: 'normal',
//       lineHeight: 'normal',
//       letterSpacing: 'normal',
//       color: '#959595'
      
//       }} >Informasi</DropdownItem>
//           <DropdownItem style={{width:'797px', height:'auto', backgroundColor:'#ffffff', 
//       fontFamily: 'Roboto',
//       fontSize: '22px',
//       fontWeight: 'normal',
//       fontStyle: 'normal',
//       fontStretch: 'normal',
//       lineHeight: 'normal',
//       letterSpacing: 'normal',
//       color: '#959595'
      
//       }} >Tips & Trik</DropdownItem>
//         </DropdownMenu>
//       </Dropdown>                
      
//       </Card>
//       </Container>
//             </Row>

//         </Container>
// <AppFooter/>
//       </div>
//     )
//   }
// }


// import React, { Component } from 'react'
// import AppNav from '../AppNav';
// import { Container, Row, Card, Badge, DropdownToggle, Dropdown,
//             DropdownItem, DropdownMenu, Form, Button} from 'reactstrap';
// import AppFooter from '../AppFooter';
// import axios from 'axios';
// import ImageUploader from 'react-images-upload';

// export default class ArticleCoverImage extends Component {

//   constructor(props) {
//     super(props);
//      this.state = { 
//        content: '', 
//       products:[]
//     };
//      this.onDrop = this.onDrop.bind(this);
// }


// handleSubmit = event => {
//   event.preventDefault();
//   axios.post('http://reduxblog.herokuapp.com/api/posts?key=barangku',
//   {
//       content: this.state.content
//   }
//   )
//       .then(res => {
//               alert('Masuk Pak Eko')
//               this.onDrop()
//           }
//       )
// }
// onDrop(picture){
//   axios.get('http://reduxblog.herokuapp.com/api/posts?key=barangku')
//   .then(res => {
//       this.setState({
//         content: this.state.content.concat(picture),
//       });
//   });
// }

// componentDidMount(){
//   axios.get('http://reduxblog.herokuapp.com/api/posts?key=barangku')
//   .then(res => {
//       this.setState({
//         products: res.data
//       })
//   });
// }

//   render() {
    
//       return (
//         <Form   onSubmit={this.handleSubmit}   >
//         <ImageUploader
//             withIcon={true}
//             buttonText='Choose images'
//             onChange={this.onDrop}
//             imgExtension={['.jpg', '.gif', '.png', '.gif']}
//             maxFileSize={5242880}
//         />
//             <Button color='primary' type="submit" > submit </Button>

// </Form>
//     );
//   }
// }



