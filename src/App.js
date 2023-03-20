import "./App.css";

function App() {
  return (
    <main>
      <h1>
        $400 <span>.00</span>
      </h1>
      <form>
        <div className="basic">
          <input type="text" placeholder={"+200 nwe samsung tv"} />
          <input type="datetime-local" />
        </div>
        <div className="descriptions">
          <input type="textl" placeholder={"description"} />
        </div>
        <button type="submit">Add</button>
      </form>
      <div className="transactions">
        <div className="transaction">
          <div className="left">
            <div className="name">new samsung tv</div>
            <div className="description">it was time for new tv</div>
          </div>
          <div className="right">
            <div className="price">$400.00</div>
            <div className="datetime">2022-12-18 15:45</div>
          </div>
        </div>

        <div className="transaction">
          <div className="left">
            <div className="name">new samsung tv</div>
            <div className="description">it was time for new tv</div>
          </div>
          <div className="right">
            <div className="price">$400.00</div>
            <div className="datetime">2022-12-18 15:45</div>
          </div>
        </div>

        <div className="transaction">
          <div className="left">
            <div className="name">new samsung tv</div>
            <div className="description">it was time for new tv</div>
          </div>
          <div className="right">
            <div className="price">$400.00</div>
            <div className="datetime">2022-12-18 15:45</div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
