import { createAsyncThunk, createSlice, configureStore } from '@reduxjs/toolkit'
import { TMDB_BASE_URL, API_KEY } from '../utils/constants'

const initialState = {
    movies: [],
    genresLoaded: false,
    genres: []
}

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwM2FkYWExM2E3ZDQ0NDllYjAwMDYxNGMyZWYzZjI3MyIsInN1YiI6IjY0ZmI5ZTU3ZTBjYTdmMDEwZGU4MDliNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.U63B7ipGaUv4OlixODMOQ-sB0P9DZKN-JLoTR6DVZO4'
    }
};


export const fetchGenres = createAsyncThunk('netflix/genres', async () => {
    const { genres } = await fetch(`${TMDB_BASE_URL}/genre/movie/list?api_key=${API_KEY}`, options)
        .then(resp => resp.json())
    return genres;
})

const createArrayFormRawData = async (results, moviesArray, genres) => {

    results.forEach((movie) => {
        const movieGenres = []
        movie.genre_ids.forEach((genre) => {
            var name = genres.find(({ id }) => id === genre)
            if (name) movieGenres.push(name.name)
        })
        if (movie.backdrop_path) {
            moviesArray.push({
                id: movie.id,
                name: movie?.original_name ? movie.original_name : movie.original_title,
                image: movie.backdrop_path,
                genres: movieGenres.slice(0, 3)
            })
        }
    })
}

const getRawData = async (api, { genres }, pagging) => {
    const moviesArray = []
    for (let i = 1; moviesArray.length < 60 && i < 11; i++) {
        const { results } = await fetch(`${api}${pagging ? `&page=${i}` : ""}`, options).then(res => res.json())
        createArrayFormRawData(results, moviesArray, genres)
        return moviesArray;
    }


}

export const fetchMovies = createAsyncThunk('netflix/trending', async ({ type }, thunkApi) => {
    const { netflix: genres } = thunkApi.getState()
    return getRawData(`${TMDB_BASE_URL}/trending/${type}/week?language=en-US`, genres, true)

})

const netflixSlice = createSlice({
    name: "Netflix",
    initialState,
    extraReducers: (builder) => {
        // ici il met a jour l'etat des props du tableau initial (initialState), lorsque la function
        // fetchGenres est executer et recupere les donnees de l'API puis les return
        builder.addCase(fetchGenres.fulfilled, (state, action) => {
            state.genres = action.payload
            state.genresLoaded = true
            // console.log(state.genres);
        });
        builder.addCase(fetchMovies.fulfilled, (state, action) => {
            state.movies = action.payload
            // console.log(state.genres);
        });


    }
})

export const store = configureStore({
    reducer: {
        netflix: netflixSlice.reducer,
    }
}) 