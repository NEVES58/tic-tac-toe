
import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Square from './components/panelgalo/square/square';
import Jogogalo from './components/panelgalo/minigame/jogogalo';
import Biggame from './components/panelgalo/biggame/biggame';
import Players from './components/playersInput/players';

function App() {
  
  
  return (
    <div className="App">
      <Header/>
      
      <div className="PanelMain"><Biggame /><Players/></div>
      
      
      <Footer/>
    </div>
  );
}

export default App;
