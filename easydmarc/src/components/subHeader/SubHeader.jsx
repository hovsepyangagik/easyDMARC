import "./SubHeader.scss";
import {useState} from "react";

export const SubHeader = () => {

    const [isActive, setIsActive] = useState(false);

    const handleClick = event => {
        setIsActive(current => !current);
    };

    return (
        <section className={`subHeader ${isActive ? 'active' : ''}`}>
            <div className="mobile-burger-menu"
                 onClick={handleClick}>
                <i className="icon-burger-menu" />
            </div>
            <div className="platform-container">
                <img src="images/platform.svg"
                     alt="EasyDMARC Platform"
                     className="easyDmarc-platform-image"
                />
                <h2 className="platform-title">EasyDMARC</h2>
                <i className="icon-right-arrow" />
            </div>
            <div className="upgrade-plan-container">
                <div className="upgrade-plan">
                    <p className="plus-plan-title">Plus Plan</p>
                    <div className="btn btn-medium upgrade-plan-btn">
                        <a href="#">Upgrade Plan</a>
                    </div>
                </div>
                <div className="permitted-volume-dropdown cursor-pointer">
                    <p className="permitted-volume-title">Permitted volume usage</p>
                    <i className="icon-down-arrow" />
                </div>
            </div>
        </section>
    )
}

export default SubHeader