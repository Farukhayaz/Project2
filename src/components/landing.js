import React from "react";
import "./landind.css";
import { useEffect, useState } from "react";
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";
import img4 from "./images/img4.jpg";
import { useNavigate } from "react-router-dom";
function Landing() {

    const [slideIndex, setSlideIndex] = useState(0);
    const images = [img1, img2, img3, img4];
    const navigate = useNavigate()

    useEffect(() => {
        const intervalId = setInterval(() => {
            setSlideIndex((prevSlideIndex) =>
                prevSlideIndex === images.length - 1 ? 0 : prevSlideIndex + 1
            );
        }, 3000);
        return () => clearInterval(intervalId);
    }, []);

    const handle = () => {
        navigate("/sinin")
    }
    return (
        <>
            {/* <div onload="slider()"> */}
            <div
                class="banner"
            >
                {/* <div class="slidder"><img src={img1} id="slideImg" /></div> */}
                <div
                    class="overlay"
                    id="slideImg"
                    style={{
                        backgroundImage: `url(${images[slideIndex]})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        height: "100%",
                        width: "100%",
                    }}
                >
                    <div class="navbar">
                        <div class="logo">
                            <h1>Logo</h1>
                        </div>
                    </div>
                    <div class="content">
                        <h1>LET'S START TO MANAGE </h1>
                        <h3>THE NAME YOU KNOW. THE NEWS YOU NEED</h3>
                        <div>
                            <button type="button" onClick={handle}>
                                Let's Start
                            </button>
                            {/* <button type="button" class="btn-2">Login/SignIn</button> */}
                        </div>
                    </div>
                </div>
            </div>
            {/* </div> */}
        </>
    );
}

export default Landing;
