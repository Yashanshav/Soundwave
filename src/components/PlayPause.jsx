import {FaPauseCircle, FaPlayCircle} from "react-icons/fa";

const PlayPause = ({isPlaying, activeSong, handlePlay, handlePause, song}) => (
  isPlaying && activeSong.name === song.name ? 
  (
    <FaPauseCircle
    className="text-gray-300"
    size={35}
    onClick={handlePause}
    />
  ) : 
    <FaPlayCircle
    className="text-gray-300"
    size={35}
    onClick={handlePlay}
    />
);

export default PlayPause;
