import Feed from "../../components/feed/Feed"
import Sidebar from "../../components/sidebar/Sidebar"
import Topbar from "../../components/topbar/Topbar"
import Rightbar from "../../components/rightbar/Rightbar"
import "./profile.css"

export default function Profile() {
    return (
        <>
        <Topbar/>
        <div className="profile">
            <Sidebar/>
            <div className="profileRight">
                <div className="profileRightTop">
                    <div className="profileCover">
                        <img src="assets/post/2.jpg" className="profileCoverImg" alt="" />
                        <img src="assets/person/3.jpg" className="profileUserImg" alt="" />
                    </div>
                    <div className="profileInfo">
                        <h4 className="profileInfoName">Khaled Samir</h4>
                        <span className="profileInfoBio">That is my bio</span>
     
                    </div>
                    </div>
                <div className="profileRightBottom">
                    <Feed/>
                    <Rightbar profile/>
                </div>
                
            </div>

        </div>


        </>
    )
}
