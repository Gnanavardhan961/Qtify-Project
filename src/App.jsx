import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Section from "./Components/Section/Section";
import SongsSection from "./Components/SongsSection/SongsSection";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Section title="Top Albums" api="https://qtify-backend-labs.crio.do/albums/top" />
      <Section title="New Albums" api="https://qtify-backend-labs.crio.do/albums/new" />
      <SongsSection /> 
    </div>
  );
}

export default App;
