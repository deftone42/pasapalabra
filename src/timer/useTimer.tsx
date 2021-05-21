import React, { useCallback } from 'react';

import { useKeyPress, Keys } from '../common/useKeyPress';

const defaultTimeLeft = 300;

export const useTimer = (endGame: boolean) => {
    const [counter, setCounter] = React.useState(defaultTimeLeft);
    const paused = useKeyPress(Keys.SPACE);

    const timeIteration = useCallback(() => {
        if (!paused && !endGame) {
            setCounter(counter - 1);
        }
    }, [counter, paused, endGame])
    
    React.useEffect(() => {
        counter > 0 && setTimeout(timeIteration, 1000);
    }, [counter, timeIteration]);

    return counter;
}