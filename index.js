const app = require("express")();
const { createServer } = require("http");
const morgan = require("morgan");
const bodyParser = require("body-parser");

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  const Error = new Error();
  `${req.url} not found this url from server`;
  Error.status = 500;
  next(Error);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: "UnHandled Internal Error",
  });
});

const server = createServer(app);

const PORT = process.env.PORT || 3120;

process.on("uncaughtException", (err) => {
  console.error(`${new Date().toUTCString()} uncaughtException:`, err);
  process.exit(0);
});
process.on("unhandledRejection", (err) => {
  console.error(`${new Date().toUTCString()} unhandledRejection:`, err);
});

server.listen(PORT, () => {
  console.log(`SERVER LISTENING AT ${PORT} SUCCESSFULLY. HAPPY CODING !`);
});
