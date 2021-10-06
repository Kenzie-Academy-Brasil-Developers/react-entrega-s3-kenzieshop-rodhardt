import "./App.css";

import Routes from "./routes";
import Header from "./components/header";

function App() {
  return (
    <>
      <Header />
      <main className="App">
        <Routes />
      </main>
    </>
  );
}

export default App;
