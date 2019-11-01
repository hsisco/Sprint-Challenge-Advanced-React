import React from 'react';
import { PlayerCard } from './PlayerCard';

export class PlayersPage extends React.Component {
  constructor(){
    super();
    this.state = {
      players: data
    }
  }
  render(){
    return (
      <div className="players">
        {this.state.players.map(soccerLady => (
          <PlayerCard key={soccerLady.name} soccerLady={soccerLady.name} />
        ))}
      </div>
    );
  }

};
