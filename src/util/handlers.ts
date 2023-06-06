import { Response } from 'express';

const defaultErrorMessage = 'Something went wrong. If this issue persists, something may have broken. There may be further information in the console.';

export const logError = (error: Error, message?: string) => {
    console.error('SEVERE: ' + message, error.message);
};

export const handleError = (res: Response, errorMessage: string, show = true) => {
    console.error('Error from user: ' + errorMessage);
    return res.status(400).send({
        error: true,
        code: 400,
        message: show ? errorMessage : defaultErrorMessage
    });
};

export const handleSuccess  = (res: Response, message: string) => {
    return res.status(200).send({
        error: false,
        code: 200,
        message: message
    });
};
