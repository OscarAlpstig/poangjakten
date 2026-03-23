import { useState } from 'react'
import './App.css'
import Ovning from './components/Ovning/Ovning';


// Definition av övningar och poänglogik
type Exercise = {
  id: string;
  name: string;
  score: (input: any) => number;
};

const exercises: Exercise[] = [
   // MEDEL
  {
    id: 'medium-1',
    name: '1 skott',
    score: (input: { shot: number }) => {
      if (input.shot <= 4) return 1;
      if (input.shot >= 10) return 10;
      return input.shot + 1 - 4;
    },
  },
  {
    id: 'medium-2',
    name: '15 skott, antal 8:or eller mer',
    score: (input: { count8plus: number }) => {
      if (input.count8plus <= 0) return 1;
      if (input.count8plus >= 15) return 10;
      return Math.min(10, Math.floor(input.count8plus / 2) + 1);
    },
  },
  {
    id: 'medium-3',
    name: '3 skott',
    score: (input: { total: number }) => {
      if (input.total <= 16) return 1;
      if (input.total >= 30) return 10;
      return Math.min(10, Math.floor((input.total - 14) / 2));
    },
  },
  {
    id: 'medium-4',
    name: '5 skott, gå > antal försök',
    score: (input: { attempts: number }) => {
      if (input.attempts <= 1) return 10;
      if (input.attempts >= 10) return 1;
      return Math.max(1, 11 - input.attempts);
    },
  },
  {
    id: 'medium-5',
    name: '5 skott',
    score: (input: { total: number }) => {
      if (input.total <= 24) return 1;
      if (input.total >= 50) return 10;
      return Math.min(10, Math.floor((input.total - 23) / 3));
    },
  },
  {
    id: 'medium-6',
    name: '10 skott, antal 9:or och 10:or',
    score: (input: { count9plus: number }) => {
      if (input.count9plus <= 0) return 1;
      if (input.count9plus >= 10) return 10;
      return input.count9plus + 1;
    },
  },
];

function App() {
  // En state per övning för input och score
  const [inputs, setInputs] = useState<{ [id: string]: any }>({});
  const [scores, setScores] = useState<{ [id: string]: number | null }>({});

  return (
    <div className="app-container">
      <h1>Poängjakten</h1>
      <table style={{ borderCollapse: 'collapse', width: '100%', maxWidth: 900, margin: 'auto' }}>
        <thead>
          <tr style={{ background: '#f0f0f0' }}>
            <th style={{ border: '1px solid #ccc', padding: 8 }}>Övning</th>
            <th style={{ border: '1px solid #ccc', padding: 8 }}>1p</th>
            <th style={{ border: '1px solid #ccc', padding: 8 }}>2p</th>
            <th style={{ border: '1px solid #ccc', padding: 8 }}>3p</th>
            <th style={{ border: '1px solid #ccc', padding: 8 }}>4p</th>
            <th style={{ border: '1px solid #ccc', padding: 8 }}>5p</th>
            <th style={{ border: '1px solid #ccc', padding: 8 }}>6p</th>
            <th style={{ border: '1px solid #ccc', padding: 8 }}>7p</th>
            <th style={{ border: '1px solid #ccc', padding: 8 }}>8p</th>
            <th style={{ border: '1px solid #ccc', padding: 8 }}>9p</th>
            <th style={{ border: '1px solid #ccc', padding: 8 }}>10p</th>
            <th style={{ border: '1px solid #ccc', padding: 8 }}>Poäng</th>
          </tr>
        </thead>
        <tbody>
          <Ovning
            namn="1 skott"
            beskrivning="Skjut ett skott och ange poängen (1-10)."
            varden={[4,null,null,5,null,6,null,7,8,'9-10']}
          />
          <Ovning
            namn="10 skott"
            beskrivning="Skjut tio skott och ange antal 8:or eller mer."
            varden={[1,2,3,4,5,6,7,8,9,10]}
          />
          {/* Lägg till fler Ovning-komponenter för andra övningar */}
        </tbody>
      </table>
    </div>
  );
}

export default App
