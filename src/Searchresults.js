import React from "react"
import Search from "./Search"

function Searchresults(results , setfinal){
    const items = results.results
    return <div>
        {console.log(items)}
        
        {items.map(function(i,key){
            return <Search results={i} key={key} setfinal={setfinal}/>
        })
        }
        </div>
}


export default Searchresults