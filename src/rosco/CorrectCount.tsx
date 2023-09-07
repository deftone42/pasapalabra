import styled from 'styled-components';
import React from 'react';

const Container = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: 2.5rem;
    left: 7rem;
    font-size: 1.5rem;
    font-weight: bold;
    border-radius: 50%;
    border: 2px solid white;
    background-color: #47cb54;
    width: 3.5rem;
    height: 3.5rem;
    z-index: -1;
`;

interface Props {
    correct: number;
}

function CorrectCount({ correct }: Props) {
    return (
        <Container>
            {correct}
        </Container>
    );
}

export default CorrectCount;