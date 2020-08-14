import React from 'react';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Projects from './components/Projects';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Navigation></Navigation>
      <Home></Home>
      <Projects></Projects>
    </div>
  );
}

export default App;
