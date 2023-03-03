import React, { useEffect, useState } from "react";
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
    const [isMobile, setIsMobile] = useState(true);
    
    function toggleSlide() {
        setCurrentId(currentId => currentId === 0 ? slidingImage.length - 1: currentId - 1)
    }
    
    function toggleSlideRight() {
        setCurrentId(currentId => currentId === slidingImage.length - 1 ? 0 : currentId + 1)
    }
    
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
    
    const staticSlides = slidingImage.map(slide => {
        return (
            <img className="carousel_image"
            key={slide.id}
            src={slide.image}
            alt=""
            />
            )
    })


    const handleResize = () => {
        if (window.innerWidth < 649) {
            setIsMobile(true)
        }else {
            setIsMobile(false)
    }}
    
    useEffect(() => {
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])    


    const carouselIndicators = slidingImage.map((slide, slideIndex) => {
        return (
                <button className="carousel_indicator current-slide"
                key={slide.id}
                onClick={() => carouselGoTo(slideIndex)}
                >
                </button>
        )
    }) 

    function carouselGoTo(slideIndex) {
        setCurrentId(slideIndex)
    }

    return (
        <main>
            <section className="hero-container">
                <div className="img-wrapper">
                    <img src="./images/baked-goods-FP.jpg" alt="baked goods"/>
                </div>
                <div className="text-container">
                    <h2 className="sub-title overlay-text">Our Bakery</h2>
                    <p className="article-text overlay-text">We do everything Gluten Free and "healthy"! We strive to make
                    desserts with more wholesome ingredients while tasting delicious. 
                    <button className="hero-menu-btn .overlay-text"><Link to="/Menu">Our Products</Link></button>
                    </p>
                </div>
            </section>

                <ul className="carousel-container">                                        
                    <button className="carousel_btn carousel_btn--left" onClick={toggleSlide}>
                        <FontAwesomeIcon icon={faChevronLeft}/>
                    </button>
                    <div className="carousel_wrapper">
                    {isMobile ? slides : staticSlides}
                    </div>
                    <button className="carousel_btn carousel_btn--right" onClick={toggleSlideRight}>
                        <FontAwesomeIcon icon={faChevronRight}/>
                    </button>
                </ul>

                <div className="carousel_nav">
                    {isMobile ? carouselIndicators : ""}
                </div>

            {/* <section className="hero-lower">
                <h3 className="subArticle-h3">Our Mission </h3>
                <p>
                    lorem ipsum dolor lorem ipsum dolor lorem ipsum dolorlorem ipsum dolor lorem ipsum dolor 
                    lorem ipsum dolor lorem ipsum dolor lorem ipsum dolorlorem ipsum dolorlorem
                    lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor.
                </p>
            </section> */}
        </main>
    )
}
