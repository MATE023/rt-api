"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const axios_1 = __importDefault(require("axios"));
const getProblems = () => {
    var da = new Date();
    return [
        { id: 1, title: 'Two Sum', num: 1, description: 'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.', difficulty: 'easy', url: new URL('https://leetcode.com/problems/two-sum'), topics: ["hashmap, arrays"], createdAt: da.getDate(), subQuestions: [] },
        { id: 2, title: 'Add Two Numbers', num: 2, description: 'You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list', difficulty: 'medium', url: new URL("https://leetcode.com/problems/add-two-numbers"), topics: ["arrays"], createdAt: da.getDate(), subQuestions: [] },
        { id: 3, title: 'Longest Substring Without Repeating Characters', num: 3, description: 'Given a string s, find the length of the longest substring without repeating characters', difficulty: 'medium', url: new URL("https://leetcode.com/problems/longest-substring-without-repeating-characters"), topics: ["strings, arrays"], createdAt: da.getDate(), subQuestions: [] }
    ];
};
const problems = getProblems();
const problemRouter = (0, express_1.Router)();
problemRouter.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});
problemRouter.get('/problems', async (req, res) => {
    try {
        const response = await axios_1.default.get('https://rt-api-ashy.vercel.app/problems');
        res.json(response.data);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ type: 'error', message: error.message });
        }
        else {
            res.status(500).json({ type: 'error', message: 'An unknown error occurred' });
        }
    }
});
problemRouter.post('/problems', (req, res) => {
    const problem = req.body;
    problems.push(problem);
    res.status(201).json(problem);
});
exports.default = problemRouter;
