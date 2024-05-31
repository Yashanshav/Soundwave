export const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
export const CLIENT_SECRET = import.meta.env.VITE_CLIENT_SECRET;
export const REDIRECT_URI = import.meta.env.VITE_REDIRECT_URI;
export const SPOTIFY_ENDPOINT = "https://accounts.spotify.com/authorize"
export const SPACE_DELIMITER = "%20";
export const SCOPES = [
    "streaming",
    "user-read-email",
    "user-read-private",
    "ugc-image-upload",
    "user-read-playback-state",
    "user-modify-playback-state",
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-top-read",
    "user-follow-read",
    "app-remote-control",
    "playlist-read-private",
    "playlist-read-collaborative",
    "playlist-modify-public",
    "playlist-modify-private",
    "user-follow-modify",
    "user-library-read",
    "user-read-playback-position",

];

export const SCOPE_URL_PARAM = SCOPES.join(SPACE_DELIMITER);