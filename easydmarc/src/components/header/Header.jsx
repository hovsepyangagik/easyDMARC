import "./Header.scss";

export const Header = () => {
    return (
        <header className="header">
            <div className="header-logo">
                <i className="icon-logomark"/>
                <h1 className="logo-title"><span>EASY</span>DMARC</h1>
            </div>
            <div className="header-right-part">
                <div className="header-menu-item">
                    <div className="bell-notification-container">
                        <i className="icon-bell-notification"/>
                        <span className="notification-count">2</span>
                    </div>
                </div>
                <div className="header-menu-item compliance">
                    <span className="header-menu-item-title">Compliance Service</span>
                    <div className="btn btn-small">
                        <a href="#">NEW</a>
                    </div>
                </div>
                <div className="header-menu-item">
                    <i className="icon-help" />
                    <span className="header-menu-item-title">Help</span>
                </div>
                <div className="profile-picture-container header-menu-item">
                    <img src="images/profile-picture.svg"
                         alt="Profile Picture"
                         className="profile-picture"/>
                </div>
            </div>
        </header>
    )
}

export default Header