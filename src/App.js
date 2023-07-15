import { useState } from "react";
import SearchBar from "./Seachbar";
import Searchresults from "./Searchresults";
import "./App.css"


function App() {
  const [selected, setselected] = useState(true)
  const [data,setdata] = useState([])
  const [results,setresults] = useState([])
  
  return (
    <div className="App">
      <Logo/>
      <Select setselected={setselected} setdata={setdata}/>
      {selected && <Form data={data} setresults={setresults} results={results} />}
    </div>
  );
}

function Logo(){
  return <div>
    <h1>VALORANT</h1>
  </div>
}
function Select({setselected,setdata}){
  return <div className="container">
    <Agents setselected={setselected} setdata={setdata}/>
    <Weapons setselected={setselected} setdata={setdata}/>
    <GameModes setselected={setselected} setdata={setdata}/>
    <Bundles setselected={setselected} setdata={setdata}/>
    <Maps setselected={setselected} setdata={setdata}/>
  </div>
}

function Agents({setselected,setdata}){

  async function handleagents(){
   setselected(true)

    try{ 
    const request = await fetch ("https://valorant-api.com/v1/agents")
    const data = await request.json()
    const item = data.data
    setdata(item)} catch(err){
      throw new Error(err)
    }
  }

  return <div>
    <button className="btn" value="agents" onClick={handleagents}>AGENTS</button>
  </div>
}



function Weapons({setselected,setdata}){
  async function handleweapons(){
    setselected(true)
    try{ 
     const request = await fetch ("https://valorant-api.com/v1/weapons")
     const data = await request.json()
     const item = data.data
     setdata(item)} catch(err){
       throw new Error(err)
     }
   }

  return <div>
    <button className="btn" value="weapons" onClick={handleweapons}>WEAPONS</button>
  </div>
}



function GameModes({setselected,setdata}){
  
  async function handlegamemodes(){
    setselected(true)
    try{ 
     const request = await fetch ("https://valorant-api.com/v1/gamemodes")
     const data = await request.json()
     const item = data.data
     setdata(item)} catch(err){
      throw new Error(err)
     }
   }
  return <div>
    <button className="btn" value="gamemodes" onClick={handlegamemodes}>GAME MODES</button>
  </div>
}



function Bundles({setselected,setdata}){
  async function handlebundles(){
    setselected(true)
    try{ 
     const request = await fetch ("https://valorant-api.com/v1/bundles")
     const data = await request.json()
     const item = data.data
     setdata(item)} catch(err){
       throw new Error(err)
     }
   }
  return <div>
    <button className="btn" value="bundles" onClick={handlebundles}>BUNDLES</button>
  </div>
}



function Maps({setselected,setdata}){
  async function handlemaps(){
    setselected(true)
    try{ 
     const request = await fetch ("https://valorant-api.com/v1/maps")
     const data = await request.json()
     const item = data.data
     setdata(item)} catch(err){
       throw new Error(err)
     }
   }
  return <div>
    <button className="btn" value="maps" onClick={handlemaps}>MAPS</button>
  </div>
}


function Form({data,setresults,results}){
  console.log(results.length)
  return <div className="div2">
    <div>
    <SearchBar data={data} setresults={setresults}/>
    <Searchresults results={results}  />
    </div>
    {results.length === 0 || results.length > 1 ? "": <Info final={results}/>}
    
  </div>
}

function Info({final}){
  console.log(final)
  return <div>
    <h1>{final[0].displayName}</h1>
    <h1>{final[0].uuid}</h1>
    <img src={final[0].displayIcon} alt={final[0].displayName}/>
    </div>
}

export default App