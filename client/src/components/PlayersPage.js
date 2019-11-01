import React from 'react';
import { PlayerCard } from './PlayerCard';

export class PlayersPage extends React.Component {
  constructor() {
      super();
      this.state = {
        player: [],
      };
  }
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

