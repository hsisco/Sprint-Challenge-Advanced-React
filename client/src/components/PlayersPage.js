import React from 'react';
import { PlayerCard } from './PlayerCard';

export class PlayersPage extends React.Component {
  constructor() {
      super();
      this.state = {
        player: [],
      };
  }

  componentDidMount() {
    console.log('cDM: fetching players data');

    axios
      .get('http://localhost:5000/api/players')
      .then(res => {
        this.setState({
            player: res.data
        });
        console.log(res)
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div className="soccerLadies">
        {players.map(soccerLady => (
          <PlayerCard
            key={soccerLady.name}
            soccerLady={soccerLady}
            country={soccerLady.country}
            searches={soccerLady.searches} />
        ))}
      </div>
    );
  }
}

