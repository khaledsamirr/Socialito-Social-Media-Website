import { Favorite, MoreVert, ThumbUp } from "@material-ui/icons"
import "./post.css"

export default function Post() {
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src="/assets/2.jpg" alt="" className="postProfilePic" />
                        <span className="postUsername">Jasmin </span>
                        <span className="postTimeAgo">10 minutes ago</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert/>
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">
                        Hey! Are you ready for christmas? 
                    </span>
                    <img src="/assets/post2.jpg" alt="" className="postImg" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                         <ThumbUp htmlColor="blue" className="postReact"/>
                        <Favorite htmlColor="red" className="postReact"/>
                        <span className="postLikeCounter">50 people like this</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postComment">23 comments</span>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
