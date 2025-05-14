import React from 'react';
// import { HeroDemo1 } from './components/ui/demo';
// import { WorldMapDemo } from './components/ui/world-map-demo';
import './App.css';
import { HeroDemo1 } from '@/components/ui/demo';
import { WorldMapDemo } from '@/components/ui/world-map-demo';

function App() {
  return (
    <div className="App">
      <HeroDemo1 />
      <WorldMapDemo />
    </div>
  );
}

export default App; 