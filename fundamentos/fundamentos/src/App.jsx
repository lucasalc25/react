import { useState } from 'react'
import './App.css'

// 2 - Importando primeiro componente
import FirstComponent from './components/FirstComponent';

// 4 - TEmplate Expression
import TemplateExpression from './components/TemplateExpression';
import MyComponent from './components/MyComponent';
import Events from './components/Events';

function App() {
  // 3 - Comentários

  return <div className="card">
    {/* 3 - Comentários */}
    <h1>Fundamentos do React</h1>
    <FirstComponent />
    <TemplateExpression />
    <MyComponent />
    <Events />
  </div>;

}

export default App
