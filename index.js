const express = require("express");
const app = express();
const db = require("./config/dbConfig");
const cors = require("cors")

app.use(express.json());
app.use(cors())


const gymController = require("./routes/gymRoute");
app.use(gymController);


app.listen(8000, () => {
    console.log("server has started on port 8000")
})
db()
