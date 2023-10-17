import { useState } from "react";
import Cal from "./pages/Cal";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Cal />
    </div>
  );
}

export default App;
