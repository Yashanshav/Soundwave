// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";
// import { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI, SCOPE_URL_PARAM, SPOTIFY_ENDPOINT } from "./auth";

// const initialState = {
//     access_token: null,
//     status: null,
// };

// export const getAccessToken = createAsyncThunk(
//     "auth/getAccessToken",
//     async (_, thunkAPI) => {
//       try {
//         const existingAccessToken = localStorage.getItem('access_token');
//         if(existingAccessToken) {
//             return existingAccessToken;
//         }
//         const response = await axios.post(
//           `${SPOTIFY_ENDPOINT}?client_id=${CLIENT_ID}&cliend_secret=${CLIENT_SECRET}&redirect_uri=${REDIRECT_URI}&scope=${SCOPE_URL_PARAM}&response_type=token&show_dialog=true`,
//           {
//             headers: {
//               "Content-Type": "application/x-www-form-urlencoded",
//             },
//           }
//         );
//         console.log(response);
//         thunkAPI.dispatch(response.data.access_token);
//         localStorage.setItem('access_token', response.data.access_token);

//         return response.data.access_token;
//       } catch (error) {
//         console.log(error);
//         return thunkAPI.rejectWithValue(error.message);
//       }
//     })

// const authSlice = createSlice({
//     name: 'auth',
//     initialState,
//     reducers: {
//     },
//     extraReducers:  {
//         [getAccessToken.fulfilled]: (state, action) => {
//             state.access_token = action.payload;
//             state.status = "success";
//         },
//         [getAccessToken.rejected]: (state) => {
//             state.status = "error";
//         },
//         [getAccessToken.pending]: (state) => {
//             state.status = "pending";
//         }

//     }
// });

// export default authSlice.reducer;