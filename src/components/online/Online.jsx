import "./online.css"
export default function Online({user}) {
    const PF = "http://localhost:5173/assets/";
    return (
        <li className="rightbarFriend">
        <div className="rightbarProfileImgContainer">
            <img src={PF+user.profilePicture} alt=""
             className="rightbarProfileImg" />
             <span className="rightbarOnline"></span>
        </div>
        <span className="rightbarUsername">{user.username}</span>
    </li>
    )
}


