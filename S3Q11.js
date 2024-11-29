const ToggleMessage = () => {

  const [isVisible, setIsVisible] =React.useState(false);

  const toggleMessage = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <>
      <button onClick={toggleMessage}>
        {isVisible ? "Hide" : "Show"}
      </button>
      {isVisible ?(
        <p>Hello, welcome to React state management!</p>
      ):<p></p>}
    
  
  </>
  )
}

const App=()=>{
  return <ToggleMessage/>
}

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);