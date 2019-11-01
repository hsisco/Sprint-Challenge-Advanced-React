import React from 'react';
import { CardDeck, Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';


export class PlayerCard extends React.Component {
  constructor(props){
    super(props);
    this.state ={}
  }
  render(props){
    return(
      <div className="🏃🏻‍♀️">
        <CardDeck>
          <Card>
            <CardBody>
              <CardTitle>{props.name}</CardTitle>
              <CardText>{props.country}</CardText>
              <CardText>
                <small className="text-muted">Searched {props.searches} times</small>
              </CardText>
            </CardBody>
          </Card>
        </CardDeck>
      </div>
    );
  }

}

