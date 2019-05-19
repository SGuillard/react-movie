import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/app.js';
const API_END_POINT = "https://api.themoviedb.org/3/";
const POPULAR_MOVIES_URL = "discover/movie?language=fr&sort_by=popularity.desc&include_adult=false&append_to_response=images";
const API_KEY = "api_key=934424955328116a494249554a384fe7";
const dbMovieApiKey = "934424955328116a494249554a384fe7";

ReactDOM.render(<App/>, document.getElementById('root'));
