import React from "react";
import Banner from "./Banner";
import Category from "./Category";
import ScrollButton from '../js/ScrollButton';
 
function Homepage () {
    return (
        <div className="Content">
            <Banner/>
            <Category/>
            <ScrollButton/>
        </div>
    )
}

export default Homepage;
