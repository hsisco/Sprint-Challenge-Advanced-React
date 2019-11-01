import React from 'react';
import './App.css';
import { Jumbotron, Container } from 'reactstrap';
import { PlayersPage } from './components/PlayersPage';
import { InputFavPlayer } from './components/InputFavPlayer';

function App() {
  return (
    <div className="App">
      <Jumbotron fluid>
        <Container fluid>
          <h1>Women's World Cup</h1>
        </Container>
        <h3>Players Ranked by Google Trends Searches</h3>
      </Jumbotron>
      <InputFavPlayer />
      <PlayersPage />
    </div>
  );
}

export default App;