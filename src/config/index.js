export const config = {
    apiKey: 'YOUR_API_KEY_HERE',
    modelParameters: {
        temperature: 0.7,
        maxTokens: 60,
        topP: 1.0,
        frequencyPenalty: 0,
        presencePenalty: 0
    },
    constants: {
        defaultCommitMessage: 'Update project files',
        supportedLanguages: ['JavaScript', 'Python', 'Java', 'C++']
    }
};