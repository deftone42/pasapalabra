import styled from 'styled-components';
import React from 'react';

import { Question, QuestionStatus } from '../gameMaster/gameMaster.model';
import { useGameMaster } from '../gameMaster/useGameMaster';
import Timer from '../timer/Timer';
import { getBgColorFromStatus, getStatusFromQuestion } from './helpers';
import CorrectCount from './CorrectCount';
import PlayerWebCam from './PlayerWebCam';

import './Rosco.scss';

const QuestionDescription = styled.div`
    position: absolute;
    left: 2rem;
    top: 2rem;
    width: 20rem;
`;

const Circle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 1.4rem;
    position: absolute;
    border-radius: 50%;
    border: 1px solid #FFFFFF;
    width: 2rem;
    height: 2rem;
    ${(props: { status: QuestionStatus }) => getBgColorFromStatus(props.status)}
`;

interface Props {
    questions: Array<Question>;
}

const renderRosco = ({ inGameQuestions, currentQuestion }) => {
    return inGameQuestions.map((question, index) => {
        const status: QuestionStatus = getStatusFromQuestion(question, currentQuestion);
        return (
            <Circle key={`${index}-${question.letter}`} status={status}>
                {question.letter}
            </Circle>
        );
    });
};

function Rosco({
    questions,
}: Props) {
    const { correct, inGameQuestions, time, currentIndex } = useGameMaster(questions);

    const currentQuestion = inGameQuestions[currentIndex];

    return (
        <React.Fragment>
            <div className="circle-container">
                {renderRosco({ inGameQuestions, currentQuestion })}
            </div>
            <QuestionDescription>
                {currentQuestion.type}: &nbsp;{currentQuestion.question}
            </QuestionDescription>
            <PlayerWebCam />
            <Timer time={time} />
            <CorrectCount correct={correct} />
        </React.Fragment>
    );
}

export default Rosco;