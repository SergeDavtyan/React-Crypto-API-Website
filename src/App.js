import React from "react";
import Featured from "./components/Featured";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Signup from "./components/Signup";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Featured />
      <Signup />
      <Footer />
    </>
  );
}

export default App;
