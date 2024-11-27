const {useState}=React;
const App=()=>{
const [Title, setTitle] = useState("React Title");
  const [Updates, setUpdates] = useState(0);
  const handleChange = () => {
    setTitle("Updated React Title");
    setUpdates((prev) => prev + 1);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>{Title}</h1>
      <button onClick={handleChange}>Change Title (React)</button>
      <p>React DOM Updates: {Updates}</p>
    </div>
  );
}




const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>)