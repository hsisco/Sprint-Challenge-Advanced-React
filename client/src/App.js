import React from 'react';
import './App.css';
import { Jumbotron, Container } from 'reactstrap';
import { PlayersGrid } from './components/PlayersGrid';

function App() {
  return (
    <div className="App">
      <Jumbotron fluid>
        <Container fluid>
          <h1>Women's World Cup</h1>
        </Container>
        <h3>Players Ranked by Google Trends Searches</h3>
      </Jumbotron>
      <PlayersGrid />
    </div>
  );
}

export default App;