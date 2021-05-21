import React from 'react';
import styled from 'styled-components';
import rosco from './data/rosco2';

import Rosco from './rosco/Rosco';

const Container = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  color: white;
`;

function App() {
  return (
    <Container>
      <Title>Pasapalabra</Title>
      <Rosco questions={rosco} />
    </Container>
  );
}

export default App;
