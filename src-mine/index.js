import express from 'express';
import validateInput from './helper.js';
import generateMessage from './generator.js';

const app = express();
const port = 3000;

app.use(express.json());

app.post("/generate", async (req, res) => {
    const { input } = req.body;

    if(validateInput(input)){
        const message = await generateMessage(input);
        res.json({ commitMessage: message });
    }else{
        console.log("Input a regular message bud.")
    }
})

app.listen(port, () => {
    console.log(`AI Commit Message Generator running on http://localhost:${port}`);
});