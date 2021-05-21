import { InGameQuestion, QuestionStatus } from "../gameMaster/gameMaster.model";

export function getStatusFromQuestion(
    question: InGameQuestion,
    currentQuestion: InGameQuestion,
): QuestionStatus {
    if (question.status === QuestionStatus.Correct || question.status === QuestionStatus.Failed) {
        return question.status;
    }
    return question.letter === currentQuestion.letter ? QuestionStatus.Current : question.status;
}

export function getBgColorFromStatus(status: QuestionStatus) {
    if (status === QuestionStatus.Current) {
        return `background: linear-gradient(to bottom, rgba(255,255,255,1) 0%,rgba(8,107,238,1) 100%,rgba(8,107,238,1) 100%,rgba(183,222,237,1) 100%);`;
    } else if (status === QuestionStatus.Correct) {
        return 'background-color: #47cb54;';
    } else if (status === QuestionStatus.Failed) {
        return 'background-color: #c11c51;';
    } else {
        return 'background-color: #086bee;';
    }
}
