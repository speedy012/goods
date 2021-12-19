import "./App.css";

import Bottom from "./Components/Bottom";
import Middle from "./Components/Middle";
import Top from "./Components/Top";

function App() {
  return (
    <main className="App flex flex-col">
      <Top />
      <Middle />
      <Bottom />
    </main>
  );
}

export default App;
