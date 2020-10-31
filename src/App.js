import React from "react";
import "./App.css";
import CardComponent from "./Component/CardComponent";
import AppBarComponent from "./Component/AppBarComponent";

function App() {
  return (
    <div className="App">
      <AppBarComponent />
      <CardComponent />
    </div>
  );
}

export default App;
