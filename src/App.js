import React from "react"
import './App.css';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'

function App() {
  return (
    <React.Fragment>
    <Navbar />
    <Hero />
    <div className="card-row">
      <Card />
    </div>
    </React.Fragment>
  );
}

export default App;
