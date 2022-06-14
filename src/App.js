import exercise from './pictures/exercise.png'
import alexis from './pictures/alexisPic.jpg'
import './App.css';
import { Counter } from './Counter.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={exercise} className="App-logo" alt="logo" />
        <p>
          Scroll down to meet the exercise team! OSA Summer 2022
        </p>
        <a
          className="App-link"
          href="https://www.notion.so/32edc7143a6546f79647ac4faaa76abc?v=a478ae73ca7d4d2ebdc48236b691b106&p=dddf6628ee02450a91d3de7c2de95754"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check out the Summer Curriculum!
        </a>
      </header>
      <header className="App-alexis">
        <h1> 
          Hi my name is Alexis!
        </h1>
        <img src={alexis} alt="yung alexis"/>
        <p style={{color: "green"}}>
          I am a rising senior studying CS at Jones!
        </p>
        
      </header>

      {/* Add your intro below this comment! Feel free to style it however you like! */}

      <Counter/>

    </div>
  );
}

export default App;
