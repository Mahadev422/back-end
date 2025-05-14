import { Router } from 'express';
import { countryCode, languages, movies } from '../controller/apiController.js';

const apiRouter = Router();

apiRouter.get('/movies', movies);
apiRouter.get('/languages', languages);
apiRouter.get('/country-code', countryCode);

export default apiRouter;
