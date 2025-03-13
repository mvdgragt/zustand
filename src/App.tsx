import "./App.css";
import { useState } from "react";
import Dashboard from "./components/Dashboard";

function App() {
  const [userName, setUserName] = useState<string>("John");
  return <Dashboard userName={userName} setUserName={setUserName} />;
}

export default App;
