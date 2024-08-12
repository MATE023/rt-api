import { Request, Response, Router, NextFunction } from 'express';
import { Problem } from '../entities/Problem';
import axios from 'axios';

const getProblems = (): Problem[] => {
    var da = new Date();
    return [
        { id: 1, title: 'Two Sum', num: 1, description: 'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.', difficulty: 'easy', url: new URL('https://leetcode.com/problems/two-sum'), topics: ["hashmap, arrays"], createdAt:  da.getDate(), subQuestions: []},
        { id: 2, title: 'Add Two Numbers', num: 2, description: 'You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list', difficulty: 'medium', url: new URL("https://leetcode.com/problems/add-two-numbers"), topics: ["arrays"], createdAt:  da.getDate(), subQuestions: [] },
        { id: 3, title: 'Longest Substring Without Repeating Characters', num: 3, description: 'Given a string s, find the length of the longest substring without repeating characters', difficulty: 'medium', url: new URL("https://leetcode.com/problems/longest-substring-without-repeating-characters"), topics: ["strings, arrays"], createdAt:  da.getDate(), subQuestions: [] }
    ]; 
}

const problems: Problem[] = getProblems();

const problemRouter = Router();

problemRouter.use((req: Request, res: Response, next: NextFunction) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });

problemRouter.get('/problems', async (req: Request, res: Response) => {
    try {
        const response = await axios.get('https://rt-api-ashy.vercel.app/problems');
        res.json(response.data);
    } catch (error){
        if (error instanceof Error) {
            res.status(500).json({ type: 'error', message: error.message });
          } else {
            res.status(500).json({ type: 'error', message: 'An unknown error occurred' });
          }
    }
})

problemRouter.post('/problems', (req: Request, res: Response) => {
    const problem: Problem = req.body;
    problems.push(problem);
    res.status(201).json(problem);
})

export default problemRouter;