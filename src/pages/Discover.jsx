import React from "react";
import { Error, Loader, SongCard } from "../components";
import { genres} from "../assets/constants";
import { useGetTopChartsQuery } from "../redux/services/spotifyApi";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const Discover = () => {
    const dispatch = useDispatch();
    const {activeSong, isPlaying} = useSelector((state) => state.player);
    const {data, isFetching, error} = useGetTopChartsQuery();
    const [genre, setGenre] = useState('Pop');

    console.log(data);

    if(isFetching ) {
        return <Loader title="Loading songs..."/>;
    }

    if(error) {
        return <Error/>
    }

    return (
        <div className="flex flex-col">
            <div className="w-full flex justify-between items-center
            sm:flex-row flex-col mt-4 mb-10">
                <h2 className="font-bold text-3xl text-white 
                text-left">
                    Discover {genre} 
                </h2>
                <select
                onChange={(e) => setGenre(e.target.value)}
                value={genre}
                className="bg-black text-gray-300 
                p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5"
                >
                    {
                        genres.map((genre) => (
                            <option key={genre.value} value={genre.title}>
                                {genre.title}
                            </option>
                        ))
                    }
                </select>
            </div>
            <div className="flex flex-wrap sm:justify-start
            justify-center gap-8">
            {
                data.tracks.items.map((song, i) => (
                        <SongCard 
                        key={song.id} 
                        song={song}
                        activeSong={activeSong}
                        isPlaying={isPlaying}
                        data={data}
                        i={i}/>
                    )
                
                )
            }
            </div>
        </div>
    );
};

export default Discover;
