import React from 'react';
import logo from './logo.svg';
import { Jumbotron, Button } from 'reactstrap';
import './App.css';

function App() {
  return (
    <div className="container">
      <Jumbotron>
        <h1 className="display-3">Hello, this is ashiz!</h1>
        <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr className="my-2" />
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <p className="lead">
          <Button color="primary">Learn</Button>
        </p>
      </Jumbotron>
    </div>
  );
}

export default App;
