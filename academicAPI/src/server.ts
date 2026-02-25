// You were hired to develop a initial backend academic system. It will manage the school platform users. This platform will be used by:
// { students, teachers and coordinators }

// Before integrating the database, the team decided to create a functional REST API with in-memory storage to validate the business rules and allow front-end tests.

import  express  from 'express';

const app = express();
const port = 8080;

app.listen(port, () => console.log(`Acesse: http://localhost:${port}/`));

// Application Requests

