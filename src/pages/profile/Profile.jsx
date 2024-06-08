import { useEffect, useState } from "react";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import "./profile.css"
import axios from "axios";
import { useParams } from "react-router";
export default function Profile() {
    const [user, setUser] = useState({});
    const PF = "http://localhost:5173/assets/";
    const username = useParams().username;
    //console.log(params.username);
    useEffect(()=>{
        const fetchUser = async()=>{
            const res = await axios.get(`http://localhost:8800/api/users?username=${username}`);
         //  console.log(res);
            setUser(res.data);
            // console.log(PF+post.img);
        }
        fetchUser();
    },[username]);
    return (
        <>
        <Topbar/>
        <div className="profile">
        <Sidebar/>
        <div className="profileRight">
            <div className="profileRightTop">
                <div className="profileCover">
                <img className="profileCoverImg" src={user.coverPicture || PF+"person/news.jpg"} alt="" />
                <img className="profileUserImg"
                 src={user.profilePicture || PF+"person/fawad.jpg"} alt="" />
                </div>
                <div className="profileInfo">
                    <h4 className="profileInfoName">{user.username}</h4>
                    <span className="profileInfoDesc">{user.desc}</span>
                </div>
            </div>
            <div className="profileRightBottom">
        <Feed username={username}/>
        <Rightbar user={user}/>
            </div>
        </div>
        </div>

        </>
    )
}

