import './hobbiesList.scss'

export default function HobbiesList({id, title, active, setSelected}) {
    return (
        <li className={active ? "hobbiesList active" : "hobbiesList"} onClick={() => setSelected(id)}>
            {title}
        </li>
    )
}
