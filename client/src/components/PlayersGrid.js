import React from 'react';
import axios from 'axios';
import { CardDeck } from 'reactstrap';
import { PlayerCard } from './PlayerCard';

export class PlayersGrid extends React.Component {
  constructor() {
      super();
      this.state = {
        players: [],
      };
  }

  componentDidMount() {
    console.log('PlayersGrid cDM: fetching players data');

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
          {this.state.players.map((soccerLady) => (
            <PlayerCard
              key={soccerLady.index}
              name={soccerLady.name}
              country={soccerLady.country}
              searches={soccerLady.searches} />
          ))}
        </CardDeck>
      </div>
    );
  }
}