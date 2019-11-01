import React from 'react';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';

export const PlayerCard = (props) => {
  return(
    <div className="🏃🏻‍♀️">
        <Card data-testid="⚽️">
          <CardBody>
            <CardTitle>{props.name}</CardTitle>
            <CardText>{props.country}</CardText>
            <CardText>
              <small className="text-muted">Searched {props.searches} times</small>
            </CardText>
          </CardBody>
        </Card>
    </div>
  );
}

