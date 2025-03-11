import express from 'express';

const app = express();

app.use(express.static('public'));

const PORT = Number(process.env.PORT) || 8080;
const server = app.listen(PORT, () => console.log("Server is running on port", server.address().port));
