const ToggleColor=()=>{
const [bg,setBg]=React.useState("blue");

const Change=()=>{
setBg(bg==="blue"?"red":"blue");

}

  return  <button onClick={Change}
  style={{backgroundColor:bg,color:"white",
    padding:"10px 20px" , 
  }}> {bg}</button>
}
  

const App=()=>{
    return (
<>    
<ToggleColor/>
</>
    )
}

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);

