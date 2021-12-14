import { Favorite, MoreVert, ThumbUp } from "@material-ui/icons"
import "./post.css"
import{Users} from "../../dummydata";
import { useState } from "react";

export default function Post({post}) {
    const [like,setLike]=useState(post.like)
    const [isLiked,setIsLiked]=useState(false)
    
    const likeHandler=()=>{
        setLike(isLiked?like-1:like+1)
        setIsLiked(!isLiked)
    }
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src={Users.filter((u)=>u.id===post.userId)[0].profilePicture} alt="" className="postProfilePic" />
                        <span className="postUsername">{Users.filter((u)=>u.id===post.userId)[0].username} </span>
                        <span className="postTimeAgo">{post.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert/>
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">
                        {post?.desc}
                    </span>
                    <img src={post.photo} alt="" className="postImg" />
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
