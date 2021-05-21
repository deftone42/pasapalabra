import { useState, useEffect, useCallback } from 'react';

export enum Keys {
    SPACE = ' ',
    C = 'c',
    F = 'f',
    P = 'p',
};

export function useKeyPress(targetKey: string, action?: Function) {
    const [keyPressed, setKeyPressed] = useState<boolean>(false);

    const toggleKey = useCallback(({ key }) => {
        if (key === targetKey) {
            action ? action() : setKeyPressed(!keyPressed);
        }
    }, [action, keyPressed, targetKey]);

    useEffect(() => {
        window.addEventListener('keypress', toggleKey);

        return () => {
            window.removeEventListener('keypress', toggleKey);
        };
    }, [toggleKey]); // Empty array ensures that effect is only run on mount and unmount
    
    return keyPressed;
  }