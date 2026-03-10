import express from "express";
import routes from "./routes/routes.js";

const app = express();
const port = 8080;

routes(app)

app.listen(port, () => console.log(`Acesse: http://localhost:${port}/`));