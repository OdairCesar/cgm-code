import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import './App.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import Sobre from './components/pages/sobre'
import Inicio from './components/pages/inicio'
import Fisico from './components/pages/fisica'
import Juridico from './components/pages/juridico'
import Header from './components/layout/header'
import Footer from './components/layout/footer'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        
        <Routes>
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/fisico" element={<Fisico />} />
          <Route path="/juridico" element={<Juridico />} />
          <Route exact path="/" element={<Inicio />} />
          <Route path="*" element={<Inicio />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
