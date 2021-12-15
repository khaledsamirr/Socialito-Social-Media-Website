import "./rightbar.css";
import{Users} from"../../dummydata";
import Online from "../online/Online";


export default function Rightbar({user}) {
    const pf="http://localhost:3000/assets/";
    const HomeRightbar=()=>{
        return(
            <>
            <div className="birthdayContainer">
                   <img className="birthdayImg"src="/assets/gift.png" alt="" className="birthdayImg" />
                    <span className="birthdayText"><b>Khaled Samir</b> and <b>14 other friends</b> have a birthday today</span>
                </div>
                <hr className="adHr"/>
                <img className="rightbarAd"src="/assets/ad.jpg" alt="" />
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                     {Users.map(u=>(
                         <Online key={u.id} user={u}/>
                     ))}
                </ul>
            
            
            </>
        );
    };
    const ProfileRightbar=()=>{
        return(
            <>
            <h4 className="rightbarTitle">User information </h4>
            <div className="rightbarInfo">
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">City: </span>
                    <span className="rightbarInfoValue">{user.city} </span>
                 </div>
                 <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">from: </span>
                    <span className="rightbarInfoValue">{user.from} </span>
                 </div>
                 <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">Relationship: </span>
                    <span className="rightbarInfoValue">{user.relationship===1?"Single":user.relationship===2?"Married":"-"} </span>
                 </div>
                 </div>
                 <h4 className="rightbarTitle">User friends </h4>
                 <div className="rightbarFollowings">
                     <div className="rightbarFollowing">
                         <img src="assets/person/1.jpg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Mohamed Saad</span>
                     </div>
                     <div className="rightbarFollowing">
                         <img src="assets/person/3.jpg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Mohamed Saad</span>
                     </div>
                     <div className="rightbarFollowing">
                         <img src="assets/person/4.jpg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Mohamed Saad</span>
                     </div>
                     <div className="rightbarFollowing">
                         <img src="assets/person/5.jpg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Mohamed Saad</span>
                     </div>
                     <div className="rightbarFollowing">
                         <img src="assets/person/8.jpg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Mohamed Saad</span>
                     </div>
                     <div className="rightbarFollowing">
                         <img src="assets/person/7.jpg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Mohamed Saad</span>
                     </div>
                 </div>
           
                
            
            
            </>
        )
    }
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
               {user?<ProfileRightbar/>:<HomeRightbar/>}
            </div>
        </div>
    )
}
