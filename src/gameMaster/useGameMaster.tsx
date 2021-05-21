import React from 'react';

import { convertToInGameQuestion } from './helpers';
import { GameMaster, Question, QuestionStatus } from './gameMaster.model';
import { useTimer } from '../timer/useTimer';
import { Keys, useKeyPress } from '../common/useKeyPress';

function goToNextAvailableQuestion(questions, currentIndex, setCurrentIndex) {
    const nextAvailableQuestionIndex = questions
        .findIndex((q, index) => {
            const match = q.status === QuestionStatus.NotAnswered && index !== currentIndex;
            if (currentIndex === questions.length - 1) {
                return match;
            }
            return match && index > currentIndex;
        });
    setCurrentIndex(nextAvailableQuestionIndex >= 0 ? nextAvailableQuestionIndex : 0);
}

export function useGameMaster(questions: Array<Question>): GameMaster {
    const [correct, setCorrect] = React.useState(0);
    const [failed, setFailed] = React.useState(0);
    const [endGame, setEndGame] = React.useState(false);
    const [inGameQuestions] = React.useState(questions.map(convertToInGameQuestion));
    const [currentIndex, setCurrentIndex] = React.useState<number>(0);
    const time = useTimer(endGame);

    useKeyPress(Keys.C, () => {
        if (!endGame) {
            inGameQuestions[currentIndex].status = QuestionStatus.Correct;
            goToNextAvailableQuestion(inGameQuestions, currentIndex, setCurrentIndex);
            setCorrect(inGameQuestions.filter(q => q.status === QuestionStatus.Correct).length);
        }
    });

    useKeyPress(Keys.F, () => {
        if (!endGame) {
            inGameQuestions[currentIndex].status = QuestionStatus.Failed;
            goToNextAvailableQuestion(inGameQuestions, currentIndex, setCurrentIndex);
            setFailed(inGameQuestions.filter(q => q.status === QuestionStatus.Failed).length);
        }
    });

    useKeyPress(Keys.P, () => {
        if (!endGame) {
            goToNextAvailableQuestion(inGameQuestions, currentIndex, setCurrentIndex);
        }
    });

    React.useEffect(() => {
        const finishedAnswers = failed + correct;
        if (finishedAnswers === inGameQuestions.length) {
            setEndGame(true);
        }
    }, [correct, failed, inGameQuestions])

    return {
        correct,
        failed,
        inGameQuestions,
        time,
        currentIndex,
        endGame,
    }
}
