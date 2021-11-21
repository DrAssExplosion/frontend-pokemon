import { action, createStore } from "easy-peasy";

const store = createStore({

    userData: {
        data: {
            login: localStorage.getItem('login'),
            password: localStorage.getItem('password'),
            accessPasswordOTP: localStorage.getItem('accessPasswordOTP'),
            currentPage: 1,
            countPaginations: 10,
        },
        pokemonSelect: {
            type: '',
            subtype: ''
        },
        setLogin: action((state, payload) => {
            state.data.login = payload;
            localStorage.setItem('login', payload);
        }),
        setPassword: action((state, payload) => {
            state.data.password = payload;
            localStorage.setItem('password', payload);
        }),
        setAccessPasswordOTP: action((state, payload) => {
            state.data.accessPasswordOTP = payload;
            localStorage.setItem('accessPasswordOTP', payload);
        }),
        setCurrentPage: action((state, payload) => {
            state.data.currentPage = payload;
        }),
        setCountPaginations: action((state, payload) => {
            state.data.countPaginations = payload;
        }),
        setPokemonSelectType: action((state, payload) => {
            state.pokemonSelect.type = payload;
        }),
        setPokemonSelectSubtype: action((state, payload) => {
            state.pokemonSelect.subtype = payload;
        })
    }
});


export default store;