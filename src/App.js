import React from 'react';
import { Container,Row } from 'react-bootstrap';
import Counter from './Counter';
import Time from './Time';


function App() {
  return (
    <div className="App">
      
      <Container >
        <Row>
        <Counter/>
        <Time/>
        </Row>
      </Container>
    </div>
  );
}

export default App;
