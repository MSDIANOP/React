const Counter = () => {
    const [counter, setCounter] = React.useState(0);
    const [step, setStep] = React.useState(1);
  
    const handleIncrease = () => {
      setCounter((curr) => curr + step);
    };
  
    const handleDecrease = () => {
      setCounter((curr) => Math.max(0, curr - step));
    };
  
    const handleStepChange = (e) => {
      const value = parseInt(e.target.value, 10);
      setStep(value > 0 ? value : 1); 
    };
  
    return (
      <>
          <button onClick={handleIncrease}>Increase</button>
          <h2>Counter = {counter}</h2>
          <button onClick={handleDecrease} >
            Decrease
          </button>
        
        
          <div>
            Step Value:{" "}
            <input
              type="number"
              value={step}
              onChange={handleStepChange}
              min="1"
              
            />
        </div>
       
      </>
    );
  };
  
  



const App=()=>{
    return <Counter/>
  }
  
  const root=ReactDOM.createRoot(document.getElementById("root"));
  root.render(<App/>);