import "./menu.scss";

export default function Menu({openMenu, setOpenMenu}) {
    return (
        <div className={"menu " + (openMenu && "active")}>
            <ul>
                <li onClick={() => setOpenMenu(false)}>
                    <a href="#intro">Home</a>
                </li>
                <li onClick={() => setOpenMenu(false)}>
                    <a href="#hobbies">Hobbies</a>
                </li>
                <li onClick={() => setOpenMenu(false)}>
                    <a href="#gallery">Art Gallery</a>
                </li>
                <li onClick={() => setOpenMenu(false)}>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>
    )
}
