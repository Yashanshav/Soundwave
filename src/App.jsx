import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI, SCOPE_URL_PARAM, SPOTIFY_ENDPOINT } from "../src/redux/features/auth";

import { Searchbar, Sidebar, MusicPlayer, TopPlay, Loader, Error } from './components';
import { ArtistDetails, TopArtists, AroundYou, Discover, Search, SongDetails, TopCharts } from './pages';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useGetTopChartsQuery } from './redux/services/spotifyApi';

const App = () => {
  const { activeSong } = useSelector((state) => state.player);
  const [token, setToken] = useState("");

  const getAccessToken = async () => {
    const hash = window.location.hash;
    if(hash) {
      const urlParams = new URLSearchParams(hash.slice(1));
      const accessToken = urlParams.get("access_token");
      setToken(accessToken);
      console.log(token);
      localStorage.setItem("access_token", accessToken);

      window.history.pushState({}, null, '/');
    }

  }

  useEffect(() => {
    const accessToken = localStorage.getItem("access_token");
    console.log(accessToken);
    if(accessToken) {
      setToken((prev) => prev = accessToken);
      console.log(accessToken);
      return;
    }
    getAccessToken();
    
  }, [token]);

  const clickHandler = () => {
    window.location.href = `${SPOTIFY_ENDPOINT}?client_id=${CLIENT_ID}&cliend_secret=${CLIENT_SECRET}&redirect_uri=${REDIRECT_URI}&scope=${SCOPE_URL_PARAM}&response_type=token&show_dialog=true`;
  };

  return (
    <>
    {
      !token ? (
        <button onClick={clickHandler}>Give Spotify permission first</button>
      ): null
    }
    <div className="relative flex">
      <Sidebar />
      <div className="flex-1 flex flex-col bg-gradient-to-br from-black to-[#121286]">
        <Searchbar />

        <div className="px-6 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse">
          <div className="flex-1 h-fit pb-40">
            <Routes>
              <Route path="/" element={<Discover />} />
              <Route path="/top-artists" element={<TopArtists />} />
              <Route path="/top-charts" element={<TopCharts />} />
              <Route path="/around-you" element={<AroundYou />} />
              <Route path="/artists/:id" element={<ArtistDetails />} />
              <Route path="/songs/:songid" element={<SongDetails />} />
              <Route path="/search/:searchTerm" element={<Search />} />
            </Routes>
          </div>
          <div className="xl:sticky relative top-0 h-fit">
            <TopPlay />
          </div>
        </div>
      </div>

      {activeSong?.name && (
        <div className="absolute h-28 bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-white/10 to-[#2a2a80] backdrop-blur-lg rounded-t-3xl z-10">
          <MusicPlayer />
        </div>
      )}
    </div>
    </>
  );
};

export default App;
