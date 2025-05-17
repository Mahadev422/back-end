import express from 'express';
import apiRouter from './router/apiRouter.js';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;
app.use(cors());
app.use(bodyParser.json());
app.use('/api',apiRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
