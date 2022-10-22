import { useState } from "react";
import "./App.css";
import BottomNav from "./components/BottomNav";
import MediaControls from "./components/MediaControls";
import SearchBox from "./components/SearchBox";

function App() {
  return (
    <div
      data-theme="night"
      className="h-screen flex flex-col items-center px-3"
    >
      <br />
      <SearchBox />
      <br />
      <MediaControls />
      <BottomNav />
    </div>
  );
}

export default App;
