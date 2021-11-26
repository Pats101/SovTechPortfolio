import HobbiesList from '../hobbiesList/HobbiesList'
import { useEffect, useState } from "react";
import './hobbies.scss'
import {
    codingPortfolio,
    drawingPortfolio,
    readingPortfolio,
} from "../../data";

export default function Hobbies() {
    
    const [selected, setSelected] = useState("coding");
    const [data, setData] = useState([]);
    const list = [
        {
            id: "coding",
            title: "Love Coding",
        },
        {
            id: "drawing",
            title: "Drawings",
        },
        {
            id: "reading",
            title: "Reading",
        },
    ];

    useEffect(() => {
        switch(selected){
            case "coding":
                setData(codingPortfolio);
                break;
            case "drawing":
                setData(drawingPortfolio);
                break;
            case "reading":
                setData(readingPortfolio);
                break;
            default:
                setData(codingPortfolio);
        }
    }, [selected])
    return (
        <div className="hobbies" id="hobbies">
            <h1>Hobbies</h1>
            <ul>
                {list.map((item) => (
                    <HobbiesList 
                        title={item.title} 
                        active={selected === item.id}
                        setSelected={setSelected}
                        id={item.id}></HobbiesList>
                ))}
            </ul>
            <div className="container">
                {data.map((d) => (
                    <div className="item">
                        <img src={d.img} alt=""/>
                        <h3>{d.title}</h3>
                    </div>                    
                ))}
            </div>
        </div>
    );
}
