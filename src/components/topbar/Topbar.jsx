import { Link } from "react-router-dom"
import "./topbar.css"
import { Search, Person, Chat, Notifications } from "@mui/icons-material"
import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"
export default function Topbar() {
    const {user} = useContext(AuthContext);
    const PF = "http://localhost:5173/assets/person/";
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <Link to="/" style={{textDecoration:"none"}}>
                <span className="logo">FawadSocial</span>
                </Link>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                 <Search className="searchIcon"/>
                 <input placeholder="Search for any friend,posts or video" className="searchInput" />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">Homepage</span>
                    <span className="topbarLink">Timeline</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Person />
                        <span className="topbarIconbadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Chat />
                        <span className="topbarIconbadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Notifications />
                        <span className="topbarIconbadge">1</span>
                    </div>
                
                </div>
                <Link to={`/profile/${user.username}`}>
                <img src={user.ProfilePicture? PF + user.ProfilePicture : PF+"banner.jpg"} alt="" className="topbarImg" />
                </Link>
            </div>
       
        </div>
    )
}


