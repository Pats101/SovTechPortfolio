import "./topbar.scss";

export default function Topbar({openMenu, setOpenMenu}) {
    return (
        <div className={"topbar " + (openMenu && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">tonde</a>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={() => setOpenMenu(!openMenu)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
