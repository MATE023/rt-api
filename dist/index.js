"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const problemRoutes_1 = __importDefault(require("./routes/problemRoutes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
app.use('/api', problemRoutes_1.default);
const port = process.env.PORT || 3000;
app.get('/', (req, res) => {
    res.send('Hello, TypeScript with Express!');
});
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
