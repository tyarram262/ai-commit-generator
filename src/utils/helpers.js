export function formatMessage(message) {
    return message.charAt(0).toUpperCase() + message.slice(1) + '.';
}

export function validateInput(input) {
    if (typeof input !== 'string' || input.trim() === '') {
        throw new Error('Invalid input: Input must be a non-empty string.');
    }
    return true;
}