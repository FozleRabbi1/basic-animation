import "./App.css";

function App() {
  const name = "programing hero";
  const namearr = name.split("");
  return (
    <div className="main">
      <div className="container">
        {/* <div className="alphabate">programing hero</div> */}
        {namearr.map((items, i) => (
          <span
            className="alphabate"
            style={{ transitionDelay: `${i * 50}ms` }}
          >
            {items}
          </span>
        ))}
      </div>

      {/* <div className="div-1">cool</div>
      <div className="box-container-2">
        <div className="div-2">cool</div>
      </div> */}
      {/* <button className="btn">hover me</button> */}
      {/* <div className="box"></div> */}

      {/* <div className="loading">
        <div className="glass"></div>
        <div className="L-box"></div>
        <div className="L-box"></div>
      </div> */}

      {/* <div className="card">
        <h2>this is heading</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum
          laboriosam accusantium illum itaque obcaecati rem?
        </p>
      </div> */}
    </div>
  );
}

export default App;
