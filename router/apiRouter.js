import { Router } from 'express';
import { countryCode, languages, movies_30, movies_100 } from '../controller/apiController.js';

const apiRouter = Router();

apiRouter.get('/movies-30', movies_30);
apiRouter.get('/movies-100', movies_100);
apiRouter.get('/languages', languages);
apiRouter.get('/country-code', countryCode);

export default apiRouter;
