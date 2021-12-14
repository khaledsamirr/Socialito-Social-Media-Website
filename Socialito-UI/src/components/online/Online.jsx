import "./online.css"

export default function Online({user}) {
    return (
        <li className="rightbarFriend">
        <div className="rightbarFriendImgContainer">
            <img src={user.profilePicture} alt="" className="rightbarFriendImg" />
            <span className="rightbarOnline"></span>
        </div>
        <span className="rightbarUsername">
            {user.username}
        </span>
    </li>
    )
}
