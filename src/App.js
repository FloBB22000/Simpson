import './App.css';
import SimpsonPersonnage from './components/SimpsonPersonnage.js';
import axios from 'axios';
import React, {useState} from 'react';

const samplePerson = {
    "quote": "By chilling my loins I increase the chances of impregnating my wife.",
    "character": "Apu Nahasapeemapetilon",
    "image": "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FApuNahasapeemapetilon.png?1497567511629",
    "characterDirection": "Left"
    }

    function App() {
      const [person, setPerson] = useState(samplePerson);
      const getPerson = () => {
        // Send the request
        axios
          .get('https://simpsons-quotes-api.herokuapp.com/quotes')
          // Extract the DATA from the received response
          .then((response) => response.data)
          // Use this data to update the state
          .then((data) => {
          setPerson(data[0]);
          });
      };
      return (
        <div className='App'>
        <SimpsonPersonnage person={person} />
        <button type="button" onClick={getPerson}>Get Person</button>
        </div>
      );
    }
    
    export default App;