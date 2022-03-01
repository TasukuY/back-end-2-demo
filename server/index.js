const express = require('express');
const cors = require('cors');

const controller = './controller';
const {getMovies, postMovie, putMovie, deleteMovie} = require(controller);

const app = express();

//Middleware
app.use(express.json());
app.use(cors());

const baseEndPoint = '/api/movies';

app.get(baseEndPoint, getMovies);
app.post(baseEndPoint, postMovie);
app.put(baseEndPoint+'/:id', putMovie);
app.delete(baseEndPoint+'/:id', deleteMovie);

const SERVER_PORT = 4004;
app.listen(SERVER_PORT, () => console.log(`Docked at port ${SERVER_PORT}`));