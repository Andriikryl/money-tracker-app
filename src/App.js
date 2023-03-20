import "./App.css";

function App() {
  return (
    <main>
      <h1>
        $400 <span>.00</span>
      </h1>
      <form>
        <div>
          <input type="text" placeholder={"+200 nwe samsung tv"} />
          <input type="datetime-local" />
        </div>
        <div className="descriptions">
          <input type="textl" placeholder={"description"} />
        </div>
      </form>
    </main>
  );
}

export default App;
