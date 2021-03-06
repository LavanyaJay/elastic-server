const express = require("express");
const app = express();
const port = 4000;
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const cors = require("cors");
const corsMiddleware = cors();
app.use(corsMiddleware);
const searchRouter = require("./route");
app.use(searchRouter);
app.listen(port, () => console.log("Listening on port: ", port));
