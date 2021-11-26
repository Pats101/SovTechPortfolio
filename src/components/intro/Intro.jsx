import './intro.scss';
import { init } from 'ityped';
import { useEffect, useRef } from 'react';
export default function Intro() {

    const textRef = useRef();
    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            strings: ["Be a Software Developer", "Contribute to the Community", "Expand My Kowledge"],

        });
    },[])
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/ptg.jpg" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Patrick T Ganhiwa</h1>
                    <h3>I aspire to <span ref={textRef}></span></h3>

                    <br></br>
                    <h4><span>I am currently a masters student nearing his degree completion in year 2022. My research field is around Artificial Intelligence, under Cyber Security Information threat Exchange.</span></h4>
                    <h4><span>I hope to become part of the SovTech team in order to learn more and contribuute back to the community as the world advances futher through technological advancements.</span></h4>
                    <h4><span>Helping the world move with technology is my objective as technology has a lot more to offer than what people realise.</span></h4>
                </div>
                <a href="#portfolio">
                    <img src="assets/arrow1.png" alt="" />
                </a>
            </div>
        </div>
    )
}
