import service from '../services/service';

const state = {
    movies: [],
    movieDetails: []
}
const getters = {
    movies(state) {
        return state.movies;
    },
    groupedMovies(state) {
        const grouped = [];

        state.movies.forEach((item, index) => {
            if (index % 3 === 0) {
                grouped.push([]);
            }
            grouped[grouped.length - 1].push(item);
        });

        return grouped;
    },
}

const mutations = {
    setMovies(state, movies) {
        state.movies = movies;
    },
    setMovieDetails(state, payload) {
        const { movieId, movieData } = payload;
        state.movieDetails[movieId] = movieData;
    }
}
const actions = {
    fetchMovies(context) {
        return service.fetchMovies().then((snapshot) => {
            context.commit('setMovies', snapshot.val());
        })
    },
    fetchMovieDetails(context, id) {
        return service.fetchMovieDetails(id).then((snapshot) => {
            context.commit('setMovieDetails', {movieId: id, movieData: snapshot.val()});
        })
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}