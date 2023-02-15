import React, { useState } from "react";
import "./HeroStyle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

export default function Hero() {

    const slidingImage = [
        {
            id: 0,
            image:"./images/pancake.jpeg",
        },
        {
            id: 1,
            image:"./images/ryeBread.jpeg",
        },
        {
            id: 2,
            image:"./images/fruitCobbler.jpeg",
        },
        {
            id: 3,
            image:"./images/applePie.jpeg",
        },
        {
            id: 4,
            image:"./images/bluberryMuffins.jpeg",
        }
    ]

    const [currentId, setCurrentId] = useState(0);

//need to slide images to the left on right click
//need to get the index of each image or ID
//map over the images and aply the same function 
//make an array of the images to cycle through with state

    
    const slides = slidingImage.map(slide => {
        return (
            <img className="carousel_image"
            key={slide.id}
            src={slide.image} 
            style={{transform: `translateX(-${currentId * 100}%)`}}
            alt=""
            />
            )
        })
        console.log(slides)

    function toggleSlide() {
        setCurrentId(currentId => currentId === 0 ? slidingImage.length - 1: currentId - 1)
        console.log(currentId)
    }

    function toggleSlideRight() {
        setCurrentId(currentId => currentId === slidingImage.length - 1 ? 0 : currentId + 1)
        console.log(currentId)
    }

    return (
        <>
            <section className="hero-container">
                <div className="img-wrapper">
                    <img src="./images/baked-goods-FP.jpg" alt="baked goods"/>
                </div>
                    <h2 className="sub-title">Our Bakery</h2>
                    <p className="article-text">lorem ipsum dolor magnus or lorem lorem ipsum magnus or lorem 
                    lorem ipsum magnus or loremlorem ipsum magnus or lorem
                    lorem ipsum magnus or lorem lorem ipsum magnus or lorem
                    </p>
                        <button className="hero-menu-btn"><Link to="/Menu">Our Products</Link></button>
            </section>

                <ul className="carousel-container">                                        
                    <button className="carousel_btn carousel_btn--left" onClick={toggleSlide}>
                        <FontAwesomeIcon icon={faChevronLeft}/>
                    </button>
                    <div className="carousel_wrapper">
                        {slides}
                    </div>
                    <button className="carousel_btn carousel_btn--right" onClick={toggleSlideRight}>
                        <FontAwesomeIcon icon={faChevronRight}/>
                    </button>
                </ul>

                <div className="carousel_nav">
                    {/* //make indicator work */}
                    <button className="carousel_indicator current-slide"></button>
                </div>

            <section className="hero-lower">
                <h3 className="subArticle-h3">Our Mission </h3>
                <p>
                    lorem ipsum dolor lorem ipsum dolor lorem ipsum dolorlorem ipsum dolor lorem ipsum dolor 
                    lorem ipsum dolor lorem ipsum dolor lorem ipsum dolorlorem ipsum dolorlorem
                    lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor.
                </p>
            </section>
        </>
    )
}
