import React from "react";
import "./HeroStyle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'


export default function Hero() {


    return (
        <>
            <section className="hero-container">
                <img src="./images/baked-goods-FP.jpg" alt="baked goods" />
                <div className="scroll-btn-pstn">
                    <button className="scroll-btn left">
                        <FontAwesomeIcon 
                            icon={faChevronLeft}
                        />
                    </button>
                    <button className="scroll-btn right">
                        <FontAwesomeIcon 
                            icon={faChevronRight}
                        />
                    </button>
                </div>
                    <h2 className="sub-title">Our Bakery</h2>
                    <p className="article-text">lorem ipsum dolor magnus or lorem lorem ipsum magnus or lorem 
                    lorem ipsum magnus or loremlorem ipsum magnus or lorem
                    lorem ipsum magnus or lorem lorem ipsum magnus or lorem
                    </p>
                <button className="hero-menu-btn">Menu</button>
            </section>

            <section className="hero-lower">
                <h3 className="subArticle-h3">This is what we are about </h3>
                <p>
                    lorem ipsum dolor lorem ipsum dolor lorem ipsum dolorlorem ipsum dolor lorem ipsum dolor 
                    lorem ipsum dolor lorem ipsum dolor lorem ipsum dolorlorem ipsum dolorlorem
                    lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor.
                </p>
            </section>
        </>
    )
}