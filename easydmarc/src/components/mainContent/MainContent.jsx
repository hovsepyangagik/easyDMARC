import "./MainContent.scss";

export const MainContent = () => {

    const easySPFBenefits = [
        "Add the SPF record on DNS once",
        "Manage from a centralized interface",
        "Solve 10 DNS lookup limitations",
        "Optimize the record without syntax knowledge",
        "Avoid the risk of configuration errors"
    ];

    const premiumCardList = [
        "100M Emails",
        "2 Domains",
        "3 Month Data History",
        "1 User",
        "EasySPF",
        "Failure Report",
        "Aggregate Geomaps",
    ];

    return (
        <section className="main-section">
            <div className="page-title-container">
                <i className="main-page-icon icon-dashboard"/>
                <h3 className="page-title">EasySPF</h3>
            </div>
            <div className="select-domain-container">
                <div className="select-domain">
                    <span className="domain-name">easydmarc.com</span>
                    <i className="icon-down-arrow"/>
                </div>
            </div>
            <div className="special-offers">
                <div className="easySPF-trial">
                    <h4 className="special-offers-title">EasySPF trial has expired</h4>
                    <p className="special-offers-description">Thank you for using EasySPF. Your trial has now ended. We’ll continue to support your domain SPF record, but access to record management has been restricted.</p>
                    <h6 className="special-offers-secondary-title">SPF Parts</h6>
                    <div className="partners">
                        <a href="#" className="getSPF">Get my SPF record value</a>
                    </div>
                    <div className="lookups">
                        <div className="without">
                            <p className="lookups-title">Lookups without EasySPF</p>
                            <p className="lookups-counts"><span>25</span> out of <span>10</span></p>
                        </div>
                        <div className="with">
                            <p className="lookups-title">Lookups with EasySPF</p>
                            <p className="lookups-counts"><span>3</span> out of <span>10</span></p>
                        </div>
                    </div>
                    <div className="premium-plans">
                        <i className="icon-premium"/>
                        <span className="premium-plans-title">Preminum Plan Feature</span>
                    </div>
                    <h5 className="benefits-title">EasySPF benefits</h5>
                    <ul className="benefits-list">
                        {easySPFBenefits.map(item => {
                            return (
                                <li className="benefit-item">
                                    <i className="icon-checkbox-circle"/>
                                    <span className="benefit-title">{item}</span>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className="upgrade-premium">
                    <h4 className="special-offers-title">Upgrade to <span>Premium</span> to Enable
                        Alert Management Feature</h4>
                    <div className="switcher-container">
                        <div className="switch-by active">Monthly</div>
                        <div className="switch-by">
                            Annual
                            <span className="switcher-badge">Save up to 10%</span>
                        </div>
                    </div>
                    <div className="premium-card">
                        <h4 className="special-offers-title">Premium</h4>
                        <span className="premium-card-description">For startups</span>
                        <p className="premium-cost">$35.99</p>
                        <span className="premium-card-description small">Per month / Billed annually</span>
                        <ul className="premium-list">
                            {premiumCardList.map(item => {
                                return (
                                    <li className="premium-list-item">
                                        <i className="icon-checkbox"/>
                                        <span className="premium-list-title">{item}</span>
                                    </li>
                                )
                            })}
                        </ul>
                        <div className="btn btn-medium upgrade-btn">
                            <a href="#">Upgrade Plan</a>
                        </div>
                    </div>
                    <a href="#" className="getSPF">Check all plans</a>
                </div>
            </div>
        </section>
    )
}

export default MainContent