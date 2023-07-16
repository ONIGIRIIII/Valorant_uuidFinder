import React from "react"
import Search from "./Search"
import "./Searchresults.css"

function Searchresults(results , setfinal){
    const items = results.results
    return <div className="results-list">
        {console.log(items)}
        
        {items.map(function(i,key){
            return <Search results={i} key={key} setfinal={setfinal}/>
        })
        }
        </div>
}


export default Searchresults