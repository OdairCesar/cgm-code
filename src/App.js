import './App.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import Sobre from './components/pages/sobre'
import Inicio from './components/pages/inicio'
import Fisico from './components/pages/fisica'
import Juridico from './components/pages/juridico'

function App() {
  return (
    <div className="App">
      <Juridico />
    </div>
  );
}

export default App;
