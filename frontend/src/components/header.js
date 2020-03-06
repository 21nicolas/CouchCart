function HeaderComponent() {
    const HeaderComponent = (
        <div id="header" className="hdr">
            <div className="hdr-logo-wrpr">
            <a href={LinkHome}>
                    <img className="hdr-logo-img" src={LogoDark} />
                </a>
            </div>
            <div className="hdr-nav-cntr">
                <a id="nav-kategorien" className="hdr-nav-primary-a-tablet" 
                   href={LinkHome}>
                <img className="hdr-nav-icon" src={Placeholder}/>
                    Kategorien
                </a>
                <a id="nav-angebote" 
                   className="hdr-nav-primary-a-tablet"
                   href={LinkHome}>
                    <img className="hdr-nav-icon" src={Placeholder}/>
                    Angebote
                </a>
                <a id="nav-kurier" 
                   className="hdr-nav-primary-a-desktop"
                   href={LinkHome}>
                    <img className="hdr-nav-icon" src={Placeholder}/>
                    Kurier
                </a>
                <a id="nav-hilfe" 
                   className="hdr-nav-primary-a-desktop" 
                   href={LinkHome}>
                    <img className="hdr-nav-icon" src={Placeholder}/>
                    Hilfe
                </a>
                <div className="hdr-nav-hamburger-wrpr">
                    <svg className="hdr-nav-hamburger-svg" viewBox="0 0 65 44">
                        <rect className="hamburger-fill" y="35.92" width="65" height="8.08" rx="3"/>
                        <rect className="hamburger-fill" y="17.96" width="65" height="8.08" rx="3"/>
                        <rect className="hamburger-fill" width="65" height="8.08" rx="3"/>
                    </svg>
                </div>
            </div>
            <div className="hdr-nav-profile-wrpr">
                <a className="hdr-nav-profile-a"
                   href={LinkHome}>
                    Anmelden
                </a>
                <button className="hdr-nav-profile-btn">Registrieren</button>
            </div>
        </div>
    );
    return(
        HeaderComponent
    );
}

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            scrolling : false
        };
        this.handleScrolling = this.handleScrolling.bind(this);
        this.render = this.render.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.componentWillUnmount = this.componentWillUnmount.bind(this);
        this.ScrollingBool = Boolean(false);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScrolling);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScrolling() {
        var BodyScrollTop = window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop;

        if(BodyScrollTop >= 1 && this.ScrollingBool == false) {
            this.setState(state => ({
                scrolling : !state.scrolling
            }));
            this.ScrollingBool = true;
        }else if(BodyScrollTop < 1 && this.ScrollingBool == true) {
            this.setState(state =>({
                scrolling : !state.scrolling
            }));
            this.ScrollingBool = false;
        }
        return;
    }

    render() {
        const scrolling = this.state.scrolling;
        return(
            <div>
                <HeaderComponent />
                {scrolling ? (
                    <div className="hdr-bx-shw"></div>
                ) : (
                    ''
                )}
            </div>
        );
    }
}

// CouchCart © 2020 
