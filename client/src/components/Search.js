import React from 'react';
import { useInput } from '../hooks/useInput';
import { InputGroup, InputGroupText, InputGroupAddon, Input } from 'reactstrap';

export function Search() {
  const [favPlayer, handleFavPlayer, setFavPlayer] = useInput('favPlayer', '');

  const handleSubmit = e => {
    e.preventDefault();
    setFavPlayer('');
  };
  
  return (
    <div>
      <form className="form">
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>Search Player</InputGroupText>
          </InputGroupAddon>
          <Input 
            id="standard-name"
            value={favPlayer}
            onChange={handleFavPlayer}
            onSubmit={handleSubmit}/>
        </InputGroup>
      </form>
      <div className="favPlayer">
        <h1>{favPlayer}</h1>
      </div>
    </div>
  );
}
