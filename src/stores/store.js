import service from '../services/service';

const state = {
    movies: []
}
const getters = {}
const mutations = {}
const actions = {
    fetchMovies() {
        service.fetchMovies().then((res) => {
            console.log(res.val());
        })
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}