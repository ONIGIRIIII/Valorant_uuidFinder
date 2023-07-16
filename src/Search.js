import React from "react";
import "./search.css"

function Search({results}){
 return <div className="search">
    <p className="textname">{results.displayName}</p>
 </div>
}   

export default Search