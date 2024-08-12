import { Question } from "./Question";

export interface Problem {
    id: number;
    title: string;
    num: number;
    description: string;
    difficulty: string;
    url: URL;
    topics: string[];
    createdAt: number;
    subQuestions: Question[];
}
