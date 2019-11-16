import React from 'react';
import { useInput } from '../hooks/useInput';
import { InputGroup, InputGroupText, InputGroupAddon, Input } from 'reactstrap';

export function InputFavPlayer() {
  const [favPlayer, handleFavPlayer, setFavPlayer] = useInput('favPlayer', '');

  // const handleSubmit = e => {
  //   e.preventDefault();
  // };

  const clearForm = e => {
    e.preventDefault();
    setFavPlayer('');
  };
  
  return (
    <div>
      <form className="form">
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>Your Favorite Player</InputGroupText>
          </InputGroupAddon>
          <Input 
            id="standard-name"
            label="Favorite Player"
            value={favPlayer}
            onChange={handleFavPlayer}
            onSubmit={clearForm}/>
        </InputGroup>
      </form>
      <div className="favPlayer">
        <h1>{favPlayer}</h1>
      </div>
    </div>
  );
}
