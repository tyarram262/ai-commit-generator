// This file is the entry point of the application. It initializes the application and sets up the necessary configurations and routes for generating commit messages.

import express from 'express';
import { CommitMessageGenerator } from './ai/generator.js';
import { validateInput } from './utils/helpers.js';
import config from './config/index.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const generator = new CommitMessageGenerator();

app.post('/generate', (req, res) => {
    const { input } = req.body;

    if (!validateInput(input)) {
        return res.status(400).json({ error: 'Invalid input' });
    }

    const message = generator.generateMessage(input);
    res.json({ commitMessage: message });
});

app.listen(port, () => {
    console.log(`AI Commit Message Generator running on http://localhost:${port}`);
});