import styled from 'styled-components';
import React from 'react';

const TimerContainer = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: 2rem;
    left: 2rem;
    font-size: 2rem;
    font-weight: bold;
    border-radius: 50%;
    border: 0.5rem solid white;
    background-color: ${(props: { isLessThan10: boolean }) => props.isLessThan10 ? '#e60210': '#fd5702'};
    width: 4.5rem;
    height: 4.5rem;
`;

interface Props {
    time: number;
}

function Timer({ time }: Props) {
    const isLessThan10 = time <= 10;

    return (
        <TimerContainer isLessThan10={isLessThan10}>
            {time}
        </TimerContainer>
    );
}

export default Timer;