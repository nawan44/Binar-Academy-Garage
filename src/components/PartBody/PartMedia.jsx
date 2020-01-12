import React, { Component } from 'react'

import { Card, CardImg, CardBody, Row,
    CardTitle, CardSubtitle, Form, FormGroup, Button, Input, Media} from 'reactstrap';
import CardComment from './CardComment';
export default class PartMedia extends Component {
  

  createTable = () => {
    let table = []

    // Outer loop to create parent
    for (let i = 0; i < 3; i++) {
      let children = []
      //Inner loop to create children
      for (let j = 0; j < 5; j++) {
        children.push(<td>{`Column ${j + 1}`}</td>)
      }
      //Create the parent and add the children
      table.push(<tr>{children}</tr>)
    }
    return table
  }


  render() {
    return(
      <table>
        {this.createTable()}
      </table>
    )
  }
}
