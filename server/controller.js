const movies = require('./db.json');
let globalID = 11;

//selecting what to export
module.exports = {
    getMovies: (req, res) => {
        res.status(200).send(movies);
     },//need , to add another function
    postMovie: (req, res) => {
        // console.log(req.body);
        let newMovie = req.body;
        newMovie.id = globalID
        // console.log(newMovie);
        movies.push(newMovie);
        res.status(200).send(movies);
        globalID++;
    },
    putMovie: (req, res) => {
        //console.log(req.body, req.params);
        let {id} = req.params;
        let {type} = req.body;
        let index = movies.findIndex(movie => +movie.id === +id);
        if(movies[index].rating === 5 && type === 'plus'){
            res.status(400).send('Cannot go above 5');
        }else if(movies[index].rating === 0 && type === 'minus'){
            res.status(400).send('Cannot go below 0');
        }else if(type === 'plus'){
            movies[index].rating++;
            res.status(200).send(movies);
        }else if(type === 'minus'){
            movies[index].rating--;
            res.status(200).send(movies);
        }else{
            res.sendStatus(400);
        }
        // console.log(index);
    },
    deleteMovie: (req, res) => {
        let id = req.params.id;
        let index = movies.findIndex(movie => +movie.id === +id);
        movies.splice(index, 1);
        res.status(200).send(movies);
    }
}