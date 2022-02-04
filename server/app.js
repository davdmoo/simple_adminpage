const express = require("express");
const app = express();
const cors = require("cors");
const port = 3001;
const mongoConnection = require("./config/mongoConfig");
const router = require("./routes");

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => res.send("TSN admin page"));

app.use(router);

app.listen(port, () => { console.log(`Listening at http://localhost:${port}`) });
