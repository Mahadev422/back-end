import { Router } from 'express';
import { countryCode, languages, movies_30, movies_100, currency, feedback, getFeedbacks } from '../controller/apiController.js';

const apiRouter = Router();

apiRouter.get('/movies-30', movies_30);
apiRouter.get('/movies-100', movies_100);
apiRouter.get('/languages', languages);
apiRouter.get('/country-code', countryCode);
apiRouter.get('/currency', currency);
apiRouter.post('/submit-feedback', feedback);
apiRouter.get('/submit-feedback', getFeedbacks);

export default apiRouter;
