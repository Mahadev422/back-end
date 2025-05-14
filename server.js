import express from 'express';
import apiRouter from './router/apiRouter.js';

const app = express();
const port = 3000;

// Endpoint to serve the JSON file
app.use('/api',apiRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
