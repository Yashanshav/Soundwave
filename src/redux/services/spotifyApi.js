import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const spotifyApi = createApi({
    reducerPath:'spotifyApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.spotify.com/v1',
        prepareHeaders: (headers) => {
            const access_token = localStorage.getItem('access_token');
            console.log(access_token);
            if(!access_token) return headers
            headers.set('Authorization', `Bearer ${access_token ?? ''}`);
            return headers;
        }
    }),
    endpoints: (builder) => ({
        // now this can be called as a hook
        getTopCharts: builder.query({query: (genre) => `/search?q=genre:"${genre ?? 'pop'}"&type=track`})
    })
});

export const {useGetTopChartsQuery} = spotifyApi;