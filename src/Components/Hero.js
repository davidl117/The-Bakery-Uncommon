import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import Contact from "./Contact";

export default function Hero() {

    const slidingImage = [
        {
            id: 8,
            image:'./images/pancake.jpeg',
            name: "Pancakes"
        },
        {
            id: 9,
            image:"./images/ryeBread.jpeg",
            name: "Rye Bread"
        },
        {
            id: 10,
            image:"./images/fruitCobbler.jpeg",
            name: "Fruit Cobbler"
        },
        {
            id: 11,
            image:"./images/applePie.jpeg",
            name: "Apple Pie"
        },
        {
            id: 12,
            image:"./images/bluberryMuffins.jpeg",
            name: "Blueberry Muffins"
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
            <figure key={slide.id}>
                <img className="carousel_image"
                src={slide.image}
                alt=""   
                />
                <figcaption>{!isMobile ? slide.name : null}</figcaption>
            </figure>
            )
    })


    const handleResize = () => {
        if (window.innerWidth < 760) {
            setIsMobile(true)
        }else {
            setIsMobile(false)
    }}
    
    useEffect(() => {
        // window.addEventListener('resize', handleResize)
        window.addEventListener('load', handleResize)
        return () => {
            // window.removeEventListener('resize', handleResize)
            window.removeEventListener('load', handleResize)
        }
    }, [])    

    function switchPhoto() {
        if (window.innerWidth > 760) {
            return (
                <>
                    <img src="./images/ryeBreadSliced.jpeg" alt="The best thing since sliced bread"/>
                </>
            )
        }else {
            return (
                <>
                    <img src="./images/cupcakes.jpeg" alt=""/>
                </>
            )
        }
    }
    // const carouselIndicators = slidingImage.map((slide, slideIndex) => {
    //     return (
    //             <button className="carousel_indicator current-slide"
    //             key={slide.id}
    //             onClick={() => carouselGoTo(slideIndex)}
    //             >
    //             </button>
    //     )
    // }) 

    // function carouselGoTo(slideIndex) {
    //     setCurrentId(slideIndex)
    // }

    return (
        <main>
            <section className="hero-container">
                <div className="img-wrapper">
                    {switchPhoto()}
                </div>
                <div className="text-container">
                    <h2 className="sub-title">Our Bakery</h2>
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

                {/* <div className="carousel_nav">
                    {isMobile ? carouselIndicators : null}
                </div> */}

            {/* <section className="hero-lower">
                <h3 className="subArticle-h3">Our Mission </h3>
                <p>
                    lorem ipsum dolor lorem ipsum dolor lorem ipsum dolorlorem ipsum dolor lorem ipsum dolor 
                    lorem ipsum dolor lorem ipsum dolor lorem ipsum dolorlorem ipsum dolorlorem
                    lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor.
                </p>
            </section> */}
            <Contact/>
        </main>
    )
}
