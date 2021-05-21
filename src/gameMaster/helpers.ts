import { InGameQuestion, Question, QuestionStatus } from './gameMaster.model';

export function convertToInGameQuestion(question: Question): InGameQuestion {
    return {
        ...question,
        status: QuestionStatus.NotAnswered,
    };
}
