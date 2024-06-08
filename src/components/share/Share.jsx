import { useContext, useRef, useState } from "react"
import "./share.css"
import {PermMedia, Label, Room, EmojiEmotions} from "@mui/icons-material"
import { AuthContext } from "../../context/AuthContext"
import axios from "axios";
export default function Share() {
    const {user} = useContext(AuthContext);
    const PF = "http://localhost:5173/assets/";
    const desc = useRef();
    const [file, setFile] = useState(null);
    const submitHandler = async (e) => {
        e.preventDefault();
      
        if (!user) {
          // Handle the case where user is not defined
          console.log("User is not defined");
          return;
        }
      
        const newPost = {
          userId: user._id,
          desc: desc.current.value,
        };
        if(file){
            const data = new FormData();
            const fileName = Date.now() + file.name;
            data.append("file", file);
            data.append("name", fileName);
            newPost.img = fileName;
            try{
                await axios.post("http://localhost:8800/api/upload", data);

            }catch(err){
                console.log(err);
            }
        }
        try{
            await axios.post("http://localhost:8800/api/posts", newPost)

        }catch(err){

        }
    }
    return (
        <div className="share">
           <div className="shareWrapper">
            <div className="shareTop">
                <img className="shareProfileImg" src={user.profilePicture ? PF+user.profilePicture : PF+"person/fawad.jpg"} alt="" />
                <input placeholder={"What's in your mind " + user.username + " ?"} 
                className="shareInput"
                ref={desc}
                />

            </div>
            <hr className="shareHr"/>
            <form className="shareBottom" onSubmit={submitHandler}>
                <div className="shareOptions">
                    <label htmlFor="file" className="shareOption">
                        <PermMedia htmlColor="tomato" className="shareIcon"/>
                        <span className="shareOptionText">Photo Or Video</span>
                        <input style={{display:"none"}} type="file" id="file" accept=".png,.jpeg,.jpg" onChange={(e)=>setFile(e.target.files[0])} />
                    </label>
                    <div className="shareOption">
                        <Label htmlColor="blue" className="shareIcon"/>
                        <span className="shareOptionText">Tag</span>
                    </div>
                    <div className="shareOption">
                        <Room htmlColor="green" className="shareIcon"/>
                        <span className="shareOptionText">Location</span>
                    </div>
                    <div className="shareOption">
                        <EmojiEmotions htmlColor="goldenrod" className="shareIcon"/>
                        <span className="shareOptionText">Feelings</span>
                    </div>
                </div>
                <button className="shareButton" type="submit">Share</button>
            </form>
           </div>
        </div>
    )
}


