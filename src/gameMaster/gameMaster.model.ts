export enum Letter {
    A = 'A',
    B = 'B',
    C = 'C',
    D = 'D',
    E = 'E',
    F = 'F',
    G = 'G',
    H = 'H',
    I = 'I',
    J = 'J',
    L = 'L',
    M = 'M',
    N = 'N',
    Ñ = 'Ñ',
    O = 'O',
    P = 'P',
    Q = 'Q',
    R = 'R',
    S = 'S',
    T = 'T',
    U = 'U',
    V = 'V',
    W = 'W',
    X = 'X',
    Y = 'Y',
    Z = 'Z'
}

export interface Question {
    letter: Letter;
    type: string;
    question: string;
    answers: string[];
}

export enum QuestionStatus {
    Correct = 1, NotAnswered = 0, Failed = -1, Current = 2
}

export interface InGameQuestion extends Question {
    status: QuestionStatus
}

export interface GameMaster {
    correct: number;
    failed: number;
    inGameQuestions: Array<InGameQuestion>;
    time: number; // milliseconds
    currentIndex: number;
    endGame: boolean;
}
