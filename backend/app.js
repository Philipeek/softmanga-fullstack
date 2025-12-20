const express = require("express");
const app = express();
const PORT = 3000;

const indexRouter = require("./routes/index");
const apiRouter = require("./routes/api");

const requestLogger = require("./middlewares/requestLogger");
const errorHandler = require("./middlewares/errorHandler");

app.use(express.json());
app.use(requestLogger);

app.use("/", indexRouter);
app.use("/api", apiRouter);

// Global error handler (always last)
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Demo server running on http://localhost:${PORT}`);
});
