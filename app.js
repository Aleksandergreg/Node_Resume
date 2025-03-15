// import express from 'express';

// const app = express();

// import path from 'path';


// app.use(express.static('public'));


// app.get("/", (req, res) => {
//     res.sendFile(path.resolve('public/frontpage/frontpage.html'));
// });

// app.get("/git", (req, res) => {
//     res.sendFile(path.resolve('public/git/git.html'));
// });

// app.get("/nodejs", (req, res) => {
//     res.sendFile(path.resolve('public/node.js/nodejs.html'))
// });

// app.get("/express", (req, res) => {
//     res.sendFile(path.resolve('public/express/express.html'))
// });

// app.get("/javascript", (req, res) =>{
//     res.sendFile(path.resolve('public/javascript/javascript.html'))
// });

// app.get("/restapi", (req, res) =>{
//     res.sendFile(path.resolve('public/restapi/restapi.html'))
// });



// const PORT = Number(process.env.PORT) || 8080;
// const server = app.listen(PORT, () => console.log("Server is running on port", server.address().port));

import express from "express";
import path from "path";
import pagesRouter from "./router/pagesRouter.js";

const app = express();

app.use(express.static("public"));

app.use(pagesRouter);

const PORT = Number(process.env.PORT) || 8080;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
