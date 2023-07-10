import React from "react";
import Banner from "./content/Banner";
import Category from "./content/Category";
import ScrollButton from './js/ScrollButton';
 
function Content () {
    return (
        <div className="Content">
            <Banner/>
            <Category/>
            <ScrollButton/>
        </div>
    )
}

export default Content;