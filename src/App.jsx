import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1 className="ml-4 flex h-24 border-2 border-gray-300 p-3 text-gray-700 shadow-md"></h1>
    </div>
  );
}

export default App;
