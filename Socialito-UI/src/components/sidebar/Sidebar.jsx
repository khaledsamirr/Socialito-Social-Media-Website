import { BookmarkBorderOutlined, ChatOutlined, Event,  GroupOutlined,   PlayCircleOutline,  RssFeed,  WorkOutline} from "@material-ui/icons";
import "./sidebar.css";

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <RssFeed className="sidebarListItemIcon"/>
                        <span className="sidebarListItemText">
                            Feed
                        </span>
                    </li>
                    <li className="sidebarListItem">
                        <ChatOutlined className="sidebarListItemIcon"/>
                        <span className="sidebarListItemText">
                            Chats
                        </span>
                    </li>
                    <li className="sidebarListItem">
                        <GroupOutlined className="sidebarListItemIcon"/>
                        <span className="sidebarListItemText">
                            Groups
                        </span>
                    </li>
                    <li className="sidebarListItem">
                        <PlayCircleOutline className="sidebarListItemIcon"/>
                        <span className="sidebarListItemText">
                            Videos
                        </span>
                    </li>
                    <li className="sidebarListItem">
                        <BookmarkBorderOutlined className="sidebarListItemIcon"/>
                        <span className="sidebarListItemText">
                            Bookmarks
                        </span>
                    </li>
                    <li className="sidebarListItem">
                        <WorkOutline className="sidebarListItemIcon"/>
                        <span className="sidebarListItemText">
                            Jobs
                        </span>
                    </li>
                    <li className="sidebarListItem">
                        <Event className="sidebarListItemIcon"/>
                        <span className="sidebarListItemText">
                            Events
                        </span>
                    </li>
                </ul>
                <button className="sidebarButton">
                    Show More
                </button>
                <hr className="sidebarHr"/>
                <ul className="sidebarFriendList">
                    <li className="sidebarFriend">
                        <img src="/assets/1.jpg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">
                            Youssef Ahmed
                        </span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/1.jpg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">
                            Mohamed Yasser
                        </span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/1.jpg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">
                            Youssef Ahmed
                        </span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/1.jpg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">
                            Mohamed Yasser
                        </span>
                    </li>    <li className="sidebarFriend">
                        <img src="/assets/1.jpg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">
                            Youssef Ahmed
                        </span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/1.jpg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">
                            Mohamed Yasser
                        </span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/1.jpg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">
                            Youssef Ahmed
                        </span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/1.jpg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">
                            Mohamed Yasser
                        </span>
                    </li>    <li className="sidebarFriend">
                        <img src="/assets/1.jpg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">
                            Youssef Ahmed
                        </span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/1.jpg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">
                            Mohamed Yasser
                        </span>
                    </li>
                </ul>
            </div>
            
        </div>
    )
}
