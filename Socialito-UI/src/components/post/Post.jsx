import { Favorite, MoreVert, ThumbUp } from "@material-ui/icons"
import "./post.css"
import axios from "axios"
import{format}from "timeago.js"

import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
export default function Post({post}) {
    const [like,setLike]=useState(post.likes.length)
    const [isLiked,setIsLiked]=useState(false)
    const [user,setUser]=useState({});
    const pf="http://localhost:3000/assets/";
    
    useEffect(()=>{
        const fetchUser= async()=>{
            const res=await axios.get(`/users/?userId=${post.userId}`);
            setUser(res.data)
        };
        fetchUser();
       
    },[post.userId])
    const likeHandler=()=>{
        setLike(isLiked?like-1:like+1)
        setIsLiked(!isLiked)
    }

   
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <Link to={`profile/${user.username}`}>
                        <img src={user.profilePicture||pf+"person/no-profile.png"}alt="" className="postProfilePic" />
                        </Link>
                        <span className="postUsername">{user.username} </span>
                        <span className="postTimeAgo">{format(post.createdAt)}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert/>
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">
                        {post?.desc}
                    </span>
                    <img src={pf+post.img} alt="" className="postImg" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                         <ThumbUp htmlColor="blue" className="postReact" onClick={likeHandler}/>
                        <Favorite htmlColor="red" className="postReact" onClick={likeHandler}/>
                        <span className="postLikeCounter">{like} people like this</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postComment">{post.comment} comments</span>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
