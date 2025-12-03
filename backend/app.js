const express = require("express");
const app = express();
const PORT = 3000;

const indexRouter = require("./routes/index");
const apiRouter = require("./routes/api");

app.use(express.json());
app.use("/", indexRouter);
app.use("/api", apiRouter);

app.listen(PORT, () => {
    console.log(`Demo server running on http://localhost:${PORT}`);
});
