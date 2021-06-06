import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Note />
      <Note />
      <Note />
      <Footer />
    </div>
  );
}

export default App;
