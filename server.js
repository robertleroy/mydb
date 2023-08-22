const express = require("express");
// const cors = require('cors');
const app = express();
const path = require("path");

const dbRouter = require("./db/routes");

// app.use(cors({
//   origin: '*'
// }));
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});
app.use('/db', dbRouter);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req,res) => {
  res.sendFile(path.join(__dirname,"index.html"));
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
})

