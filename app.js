import express from 'express';

const app = express();

import path from 'path';


app.use(express.static('public'));


app.get("/", (req, res) => {
    res.sendFile(path.resolve('public/frontpage/frontpage.html'));
});

app.get("/git", (req, res) => {
    res.sendFile(path.resolve('public/git/git.html'));
});

app.get("/javascript", (req, res) =>{
    res.sendFile(path.resolve('public/javascript/javascript.html'))
});

const PORT = Number(process.env.PORT) || 8080;
const server = app.listen(PORT, () => console.log("Server is running on port", server.address().port));
