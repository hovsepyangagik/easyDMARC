import "./LeftMenuContainer.scss";
import {useState, useEffect} from "react";


export const LeftMenuContainer = () => {

    const leftMenuItems = [
        {
            id: 1,
            icon: "icon-dashboard",
            title: "Dashboard"
        },
        {
            id: 2,
            icon: "icon-domains",
            title: "Domains"
        },
        {
            id: 3,
            icon: "icon-aggregate-reports",
            title: "Aggregate Reports"
        },
        {
            id: 4,
            icon: "icon-failure-reports",
            title: "Failure Reports"
        },
        {
            id: 5,
            icon: "icon-email-senders",
            title: "Email Senders"
        },
        {
            id: 6,
            icon: "icon-easySPF",
            title: "EasySPF"
        },
        {
            id: 7,
            icon: "icon-managedDMARC",
            title: "Managed DMARC"
        },
        {
            id: 8,
            icon: "icon-managedBIMI",
            title: "Managed BIMI"
        },
        {
            id: 9,
            icon: "icon-reputation-monitoring",
            title: "Reputation Monitoring"
        },
        {
            id: 10,
            icon: "icon-email-investigation",
            title: "Email Investigation"
        },
        {
            id: 11,
            icon: "icon-alerts",
            title: "Alerts"
        },
        {
            id: 12,
            icon: "icon-tools",
            title: "Tools",
            type: "dropdown"
        },
        {
            id: 13,
            icon: "icon-DNS-timeline",
            title: "DNS Timeline"
        },
    ];

    const easyDMARC_settings_list = [
        {
            id: 1,
            icon: "icon-domain-management",
            title: "Domain management"
        },
        {
            id: 2,
            icon: "icon-domain-groups",
            title: "Domain groups"
        },
        {
            id: 3,
            icon: "icon-alert-management",
            title: "Alert management"
        },
        {
            id: 4,
            icon: "icon-reporting",
            title: "Reporting"
        },
    ]

    const [active, setActive] = useState(leftMenuItems[0].id);

    return (
        <aside className="left-menu-container">
            <ul className="left-menu-list">
                {leftMenuItems.map(item => {
                    return (
                        <li
                            key={item.id}
                            onClick={() => setActive(item.id)}
                            className={`left-menu-list-item 
                                        ${active === item.id ? 'active' : ''}
                                        ${item.type === 'dropdown' ? 'menu-item-dropdown' : ''}
                                      `}
                        >
                            <i className={`menu-icon ${item.icon}`}/>
                            <span className="menu-title">{item.title}</span>
                        </li>
                    )
                })}
            </ul>

            <span className="easyDMARC-settings-info-message">EasyDMARC settings</span>

            <ul className="left-menu-list">
                {easyDMARC_settings_list.map(item => {
                    return (
                        <li
                            key={item.id}
                            onClick={() => setActive(item.id)}
                            className={`left-menu-list-item 
                                        ${active === item.id ? 'active' : ''}
                                        ${item.type === 'dropdown' ? 'menu-item-dropdown' : ''}
                                      `}
                        >
                            <i className={`menu-icon ${item.icon}`}/>
                            <span className="menu-title">{item.title}</span>
                        </li>
                    )
                })}
            </ul>
        </aside>
    )
}

export default LeftMenuContainer;