import "./topbar.css";
import {Search,Person, Chat, Notifications} from "@material-ui/icons"
import {Link} from 'react-router-dom';

export default function Topbar() {
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <Link to="/" style={{textDecoration:"none"}}>
                <span className="logo">SOCIALITO</span>
                </Link>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <Search className="searchIcon"/>
                    <input placeholder="Search" className="searchInput" />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">HOMEPAGE</span>
                    <span className="topbarLink">TIMELINE</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Person/>
                        <span className="topbarIconCounter">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Chat/>
                        <span className="topbarIconCounter">3</span>
                    </div>
                    <div className="topbarIconItem">
                        <Notifications/>
                        <span className="topbarIconCounter">7</span>
                    </div>
                </div>
                <img src="/assets/2.jpg" alt="" className="topbarProfilePic" />
            </div>
        </div>
    )
}
