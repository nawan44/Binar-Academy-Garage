import React, { Component } from 'react'

import { Card, CardImg, CardBody, CardSubtitle,  Input, Media} from 'reactstrap';
export default class CardComment extends Component {
  
  render() {
    return (
        <Card style={{width:'680px'}}>
          <CardBody>
            <CardSubtitle style={{marginBottom:'50px'}}> 
              <Media>
                <Media>
                  <CardImg className="MainCardCommentCardImg"
                   src="https://scontent.fcgk8-2.fna.fbcdn.net/v/t1.0-9/37228699_10156511912949419_5427734426052198400_n.jpg?_nc_cat=106&_nc_eui2=AeFbW0UNjyUU6wUYr2IRN9OeP8hreReeKw5JhLn4zpkqOk1EoX7p-oyHW8DTrHt5IrPnY0tK6xlY0Q6fIY6iv9XgAzUKHS8I46Du69aZ0qCGvQ&_nc_ht=scontent.fcgk8-2.fna&oh=c180ed12f4d6e241827c9bed4879df13&oe=5D034823
                    "/>
                  <Media  />
                </Media>
                <Media body>
                <div className="MainCardCommentNama">
                  Nama
                  <small className="MainCardCommentSmall">
                  Last updated 3 mins ago</small>
                </div>
                </Media>
                <CardSubtitle style={{width:'auto'}}> 
                  <div>Like .</div><div>Reply</div>
                </CardSubtitle>
              </Media>
            </CardSubtitle>
          </CardBody>
        </Card>
    )
  }
}
