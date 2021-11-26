import { useState } from 'react';
import './gallery.scss';

export default function Gallery() {


    const [currentSlide, setCurrentSlide] = useState(0);
    const data = [
        {
            id: "1",
            icon: "./assets/arrow1.png",
            title: "Male Pencil Portrait Munya",
            description: "Made use of pencil, rubber, white paper and mono eraser",
            img: "./assets/munya.jpg",
        },
        {
            id: "2",
            icon: "./assets/cell.png",
            title: "Female Pencil Portrait of Caroline",
            description: "Made use of pencil, rubber, white paper and mono eraser",
            img: "./assets/caroline.jpg",
        },
        {
            id: "3",
            icon: "./assets/arrow1.png",
            title: "Half Female Teary Face, a Brain and a Heart",
            description: "Made use of colors, pencil, rubber, white paper and mono eraser",
            img: "./assets/hearttearsbrain.png",
        },
        {
            id: "4",
            icon: "./assets/cell.png",
            title: "Sinking Lemon",
            description: "Made use of colors, pencil, rubber, white paper and mono eraser",
            img: "./assets/lemon.jpg",
        },
    ];

    const handleClick = (path) => {
        path === "left" 
        ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 3)
        : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
    };

    return (
        <div className="gallery" id="gallery">
            <div className="slider" style={{transform: `translateX(-${currentSlide * 100}vw)` }}>
                {data.map((d) => (
                    <div className="container">
                        <div className="item">
                            <div className="left">
                                <div className="leftContainer">
                                    <div className="imgContainer">
                                        <img src={d.icon} alt="" />
                                    </div>
                                    <h2>{d.title}</h2>
                                    <p>
                                        {d.description} 
                                    </p>
                                    <span>Projects</span>
                                </div>
                            </div>
                            <div className="right">
                                <img src={d.img} alt="" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <img src="assets/arrow1.png" className="arrow left" onClick={() => handleClick("left")} alt="" />
            <img src="assets/arrow1.png" className="arrow right" onClick={() => handleClick()} alt="" />
        </div>
    );
}
