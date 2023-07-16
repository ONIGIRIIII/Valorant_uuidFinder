import React from "react";
import {FaSearch} from "react-icons/fa"
import { useState } from "react";
import "./Searchbar.css"


function SearchBar({data,setresults,setfinal}){
    const [text, settext] = useState("")

    function fetchData(value,data){
        const results = data.filter((user) =>{
            return user && user.displayName && user.displayName.toLowerCase().includes(value)
        })
        setresults(results)
    }

    function handleChange(value){
        settext(value)
        fetchData(value,data)
    }

    return <div className="input-wrapper">
        <FaSearch id="search-icon"/>
        <input placeholder="Type the Name ..."
         value={text} 
         onChange={(e) => handleChange(e.target.value)}></input>
         <button onClick={(e) => handleChange("")} className="clear">CLEAR</button>
        </div>
}


export default SearchBar