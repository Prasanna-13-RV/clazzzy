// export const BASE_URL = ;
export const NODE_ENV = "development";
// export const NODE_ENV = 'production'

export const BASE_URL =
    NODE_ENV === "development"
        ? "https://clazzzy-server.herokuapp.com/api"
        : "https://andhaadhirehab.com/api";
