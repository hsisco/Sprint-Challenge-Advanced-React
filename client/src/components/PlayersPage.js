import React from 'react';
import axios from 'axios';
import { CardDeck } from 'reactstrap';

import { PlayerCard } from './PlayerCard';

export class PlayersPage extends React.Component {
  constructor() {
      super();
      this.state = {
        players: [],
      };
  }

  componentDidMount() {
    console.log('cDM: fetching players data');

    axios
      .get('http://localhost:5000/api/players')
      .then(res => {
        this.setState({
            players: res.data
        });
        console.log(res)
      })
      .catch(err => console.log(err));
  }
  
  render() {
    return (
      <div className="soccerLadies">
        <CardDeck>
          {this.state.players.map((soccerLady, index) => (
            <PlayerCard
              key={soccerLady.index}
              soccerLady={soccerLady}
              name={soccerLady.name}
              country={soccerLady.country}
              searches={soccerLady.searches} />
          ))}
        </CardDeck>
      </div>
    );
  }
}

