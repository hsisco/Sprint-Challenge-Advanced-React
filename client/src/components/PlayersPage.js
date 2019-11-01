import React from 'react';
import { PlayerCard } from './PlayerCard';
import { useLocalStorage } from '../hooks/useLocalStorage';

export const PlayersPage = (key, initialValue) => {
  const [players] = useLocalStorage(key, initialValue);
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

