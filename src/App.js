import "./App.css";

import Bottom from "./Components/Bottom";
import Middle from "./Components/Middle";
import Top from "./Components/Top";

function App() {
  return (
    <div className="App border-2 border-cyan-800 flex flex-col">
      <Top />
      <Middle />
      <Bottom />
    </div>
  );
}

export default App;
