import React from 'react';
import './App.css';
import { Jumbotron, Container } from 'reactstrap';
import { PlayersPage } from './components/PlayersPage';

function App() {
  return (
    <div className="App">
      <Jumbotron fluid>
        <Container fluid>
          <h1>Women's World Cup</h1>
        </Container>
      </Jumbotron>
      <PlayersPage />
    </div>
  );
}

export default App;