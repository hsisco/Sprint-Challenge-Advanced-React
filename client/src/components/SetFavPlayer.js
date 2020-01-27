import React from 'react';
import { useInput } from '../hooks/useInput';
import { InputGroup, InputGroupText, InputGroupAddon, Input, Button } from 'reactstrap';

export function SetFavPlayer() {
  const [favPlayer, handleFavPlayer, setFavPlayer] = useInput('favPlayer', '');

  const handleSubmit = e => {
    e.preventDefault();
    setFavPlayer("");
  };
  
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>Who is the best?</InputGroupText>
        </InputGroupAddon>
          <Input 
            type="text" 
            name="search"
            value={favPlayer}
            onChange={handleFavPlayer} />
            <Button onClick="submit">Declare it!</Button>
        </InputGroup>
      </form>
      <div className="favPlayer">
        <h1>{favPlayer} is my favorite player!</h1>
      </div>
    </div>
  );
}
