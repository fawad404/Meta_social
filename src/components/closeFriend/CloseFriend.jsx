import "./closeFriend.css"
export default function CloseFriend({user}) {
    const PF = "http://localhost:5173/assets/";
    return (
    <li className="sidebarFriend">
        <img src={PF+user.profilePicture} alt="" className="sidebarFriendImg" />
         <span className="sidebarFriendName">{user.username}</span>
        </li>
    )
}


