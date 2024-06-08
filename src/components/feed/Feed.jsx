import { useContext, useEffect, useState } from "react"
import Post from "../post/Post"
import Share from "../share/Share"

import "./feed.css"
import axios from "axios"
import { AuthContext } from "../../context/AuthContext"


export default function Feed({username}) {
    const [posts, setposts] = useState([]);
    const {user} = useContext(AuthContext);
    const PA = user._id.$oid;
    //console.log(PA); // Assuming $oid is the property containing the ObjectId

    useEffect(()=>{
        const fetchPosts = async()=>{
            const res = username
            ? await axios.get("http://localhost:8800/api/posts/profile/" + username)
            :await axios.get("http://localhost:8800/api/posts/timeline/" + PA);

            setposts(res.data);
           //console.log(res.data);
        }
        fetchPosts();
    },[username, PA]);
    return (

        <div className="feed">
            <div className="feedWrapper">
                <Share/>
                {posts.map(p=>(
                    <Post key={p._id} post={p}/>
                ))}
            </div>
        </div>
    )
}


