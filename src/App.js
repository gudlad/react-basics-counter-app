import Counter from "./Component/Learning examples/Counter";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="card">
        <span style={{ fontSize: "20px" }}>Counter App 🔄</span>
        <Counter></Counter>
      </div>
    </div>
  );
}

export default App;
