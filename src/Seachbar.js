import React from "react";
import {FaSearch} from "react-icons/fa"
import { useState } from "react";


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

    return <div>
        <FaSearch/>
        <input placeholder="search"
         value={text} 
         onChange={(e) => handleChange(e.target.value)}></input>
         
        </div>
}


export default SearchBar