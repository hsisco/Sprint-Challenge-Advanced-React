import React from 'react';
import './App.css';
import { Jumbotron, Container } from 'reactstrap';
import { PlayersGrid } from './components/PlayersGrid';
import { SetFavPlayer } from './components/SetFavPlayer';

function App() {
  return (
    <div className="App">
      <Jumbotron fluid>
        <Container fluid>
          <h1>Women's World Cup</h1>
          <DarkToggle />
        </Container>
        <h3>Players Ranked by Google Trends Searches</h3>
      </Jumbotron>
      <SetFavPlayer />
      <PlayersGrid />
    </div>
  );
}

export default App;