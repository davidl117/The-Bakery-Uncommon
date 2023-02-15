import React from "react";
import { Link } from "react-router-dom";

export default function About() {
    return (
        <article>
            <h1>What we are all about</h1>
            <p>
                dummytext dummytext dummytext dummytext dummytext
                dummytext dummytext dummytext dummytext dummytext dummytext
                dummytextdummytextdummytextdummytextdummytextdummytext dummytext
            </p>
            <button>
                <Link to="/Menu">Menu</Link>
            </button>
        </article>
    
    )
}