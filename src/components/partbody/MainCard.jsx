import React, { Component } from 'react'

import { Card, CardImg, CardBody, FormFeedback, FormText,
    CardTitle, CardSubtitle, Form, FormGroup, Badge, Input, Media} from 'reactstrap';
export default class MainCard extends Component {
  
  render() {
    return (
        <Card>
 <CardBody>
        <CardSubtitle>   
        <Media>
      <Media><CardImg style={{width:'70px', height:'70px', marginRight:'10px', borderRadius:'50%'}} src="
      https://scontent.fcgk8-2.fna.fbcdn.net/v/t1.0-9/37228699_10156511912949419_5427734426052198400_n.jpg?_nc_cat=106&_nc_eui2=AeFbW0UNjyUU6wUYr2IRN9OeP8hreReeKw5JhLn4zpkqOk1EoX7p-oyHW8DTrHt5IrPnY0tK6xlY0Q6fIY6iv9XgAzUKHS8I46Du69aZ0qCGvQ&_nc_ht=scontent.fcgk8-2.fna&oh=c180ed12f4d6e241827c9bed4879df13&oe=5D034823
      " className="Icon"
      />
        <Media  />
      </Media>
      <Media body>
        <Media heading className="MediaHeading">
          Media heading
        </Media>
       1 hours ago
         </Media>

         <Badge style={{padding:'10px', }} color="primary" pill>+ Follow</Badge>
    </Media>
        </CardSubtitle>
        </CardBody>
        <CardBody>
          <CardTitle> <CardImg src="
          https://scontent.fcgk8-2.fna.fbcdn.net/v/t1.0-9/37228699_10156511912949419_5427734426052198400_n.jpg?_nc_cat=106&_nc_eui2=AeFbW0UNjyUU6wUYr2IRN9OeP8hreReeKw5JhLn4zpkqOk1EoX7p-oyHW8DTrHt5IrPnY0tK6xlY0Q6fIY6iv9XgAzUKHS8I46Du69aZ0qCGvQ&_nc_ht=scontent.fcgk8-2.fna&oh=c180ed12f4d6e241827c9bed4879df13&oe=5D034823
                   "
          /> </CardTitle>       
         

        </CardBody>
        <CardBody>
            <CardTitle> Custom</CardTitle>
        <CardSubtitle><h2>CHOPPERLAND RE 350 VS CHOPPERLAND SR 400</h2></CardSubtitle>
        </CardBody>
      
        <CardBody>
        <CardSubtitle>
            <Form>
            <FormGroup>
          <Input valid style={{backgroundColor:'#ebebe0', borderRadius:'30px'}} placeholder="Add Comment..."/>
          <FormFeedback valid>Sweet! that name is available</FormFeedback>
          <FormText>Example help text that remains unchanged.</FormText>
        </FormGroup>
        </Form>
        </CardSubtitle>
        </CardBody>
        <CardBody>
        <CardSubtitle>View Comment</CardSubtitle>
        </CardBody>
        
      </Card>
    )
  }
}
