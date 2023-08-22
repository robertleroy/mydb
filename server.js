const express = require("express");
var cors = require('cors')
const app = express();
const path = require("path");

const dbRouter = require("./db/routes");

app.use(cors())
app.use('/db', dbRouter)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req,res) => {
  res.sendFile(path.join(__dirname,"index.html"));
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
})

