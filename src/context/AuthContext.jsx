import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";
const INITIAL_STAGE = {
    user: {
        "_id": {
          "$oid": "656b4cf3d153484c6df53065"
        },
        "username": "fawadd",
        "email": "fawadd@gmail.com",
        "password": "$2b$10$uDskXhwqYWWqGIDIyrhWL.1w2k1N6qrfkj/YuWAUs4LRuND14Y3BK",
        "profilePicture": "fawad.jpg",
        "coverPicture": "",
        "followers": [
          "656249de30d7726ea2c4babe"
        ],
        "followings": [
          "656249d230d7726ea2c4babc"
        ],
        "isAdmin": false,
        "createdAt": {
          "$date": "2023-12-02T15:27:47.332Z"
        },
        "updatedAt": {
          "$date": "2023-12-02T20:29:53.363Z"
        },
        "__v": 0
      },
    isFetching: false,
    error: false,
};

export const AuthContext = createContext(INITIAL_STAGE);
export const AuthContextProvider = ({children}) =>{
    const [state, dispatch] = useReducer(AuthReducer,INITIAL_STAGE);
return(
    <AuthContext.Provider 
      value={{
        user:state.user,
        isFetching:state.isFetching,
        error:state.error,
        dispatch
        }}>
        {children}
    </AuthContext.Provider>
);
};