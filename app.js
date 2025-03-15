import express from "express";
import pagesRouter from "./router/pagesRouter.js";

const app = express();

app.use(express.static("public"));

app.use(pagesRouter);

const PORT = Number(process.env.PORT) || 8080;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
