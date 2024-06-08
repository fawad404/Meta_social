import "./rightbar.css";
import {Users} from "../../dummydata"
import Online from "../online/Online";
export default function Rightbar({user}) {
    const HomeRightbar = () => {
        return (
            <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src="/assets/person/gift.png" alt="" />
             <span className="birthdayText">
               <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today
              </span>
            </div>
         <img className="rightbarAd" src="/assets/person/ad.jpg" alt="" />
            <h4 className="rightbarTitle">Online Friends</h4>
            <ul className="rightbarFriendList">
                {Users.map(u=>(
                 <Online key={u.id} user={u}/>
                 ))}
                </ul>          
            </>
        );
    };
    const ProfileRightbar = () => {
        return(
        <>
        <h4 className="rightbarTitle">User information</h4>
        <div className="rightbarInfo">
            <div className="rightbarInfoItem">
                <span className="rightbarInfoKey">City:</span>
                <span className="rightbarInfoValue">{user.city}</span>
            </div>
            <div className="rightbarInfoItem">
                <span className="rightbarInfoKey">From:</span>
                <span className="rightbarInfoValue">{user.from}</span>
            </div>
            <div className="rightbarInfoItem">
                <span className="rightbarInfoKey">Relationship:</span>
                <span className="rightbarInfoValue">{user.relationship ===1 ? "Single" : user.relationship ===2 ? "Married" : "-"}</span>
            </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
            <div className="rightbarFollowing">
                <img src="/assets/person/user2.jpg" alt="" className="rightbarFollowingImg" />
                <span className="rightbarFollowingName">Ayesha khalid</span>
            </div>
            <div className="rightbarFollowing">
                <img src="/assets/person/user3.jpg" alt="" className="rightbarFollowingImg" />
                <span className="rightbarFollowingName">Faiza Sadique</span>
            </div>
            <div className="rightbarFollowing">
                <img src="/assets/person/user4.jpg" alt="" className="rightbarFollowingImg" />
                <span className="rightbarFollowingName">Ahmad Umar</span>
            </div>
            <div className="rightbarFollowing">
                <img src="/assets/person/user3.jpg" alt="" className="rightbarFollowingImg" />
                <span className="rightbarFollowingName">kinza khalid</span>
            </div>
            <div className="rightbarFollowing">
                <img src="/assets/person/user4.jpg" alt="" className="rightbarFollowingImg" />
                <span className="rightbarFollowingName">Abdullah Manzoor</span>
            </div>
            <div className="rightbarFollowing">
                <img src="/assets/person/user2.jpg" alt="" className="rightbarFollowingImg" />
                <span className="rightbarFollowingName">Kianat Rizwi</span>
            </div>
            <div className="rightbarFollowing">
                <img src="/assets/person/user.jpg" alt="" className="rightbarFollowingImg" />
                <span className="rightbarFollowingName">Zain Bashir</span>
            </div>
        </div>

        </>
        );
    };
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
           
           {user ? <ProfileRightbar /> : <HomeRightbar />}
            </div>
        </div>
    );
}
