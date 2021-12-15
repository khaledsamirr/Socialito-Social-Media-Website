import { useEffect,useState } from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import axios from "axios"

export default function Feed({username}) {
    const [posts,setPosts]=useState([])

    useEffect(()=>{
        const fetchPosts= async()=>{
            const res=username?
            await axios({url:"posts/profile/"+username,baseURL:'http://localhost:3000/'})
            :await axios.get("posts/timeline/619794a931285187a8761e7b");
            setPosts(res.data)
            console.log(res)
    
        };
        fetchPosts();
       
    },[])
  
    return (
        <div className="feed">
            <div className="feedWrapper">
                <Share/>
                {posts.map(p=>(
                    <Post key={p._id } post={p}/>    
                ))}
                
            </div>
        </div>
    )
}
