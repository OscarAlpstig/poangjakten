
import { useState } from 'react';
import './App.css'
import Ovning from './components/Ovning/Ovning';


function App() {
  // Lista med övningar och poängmatriser
  const ovningar = [
    {
      namn: "1 skott",
      beskrivning: "Skjut ett skott och ange poängen (4-10).",
      varden: [4,null,null,5,null,6,null,7,8,'9-10']
    },
    {
      namn: "10 skott",
      beskrivning: "Skjut tio skott och ange antal 8:or eller mer.",
      varden: [1,2,3,4,5,6,7,8,9,10]
    },
    {
      namn: "3 skott",
      beskrivning: "Skjut tre skott och ange poängen (18-30).",
      varden: [18,19,20,21,22,23,24,25,26,'27-30']
    },
    {
      namn: "Skjut >9",
      beskrivning: "Antal försök för 9 eller högre.",
      varden: [10,9,8,7,6,5,4,3,2,1]
    },
    {
      namn: "5 skott",
      beskrivning: "Poäng efter 5 skott.",
      varden: [38,39,40,41,42,43,44,45,46,'47-50']
    },
    {
      namn: "10 skott",
      beskrivning: "Poäng efter 10 skott.",
      varden: ['>67',68,69,70,'71-74','75-79','80-84','85-89','90-93','94-100']
    },
    {
      namn: "2 skott",
      beskrivning: "Poäng efter 2 skott.",
      varden: [10,11,12,13,14,15,16,17,18,'19-20']
    },
    {
      namn: "10 skott 9 eller mer",
      beskrivning: "Antal skott med poäng 9 eller mer.",
      varden: [1,2,3,4,5,6,7,8,9,10]
    },
  ];

  // State för valda poäng per övning (index = övningens index)
  const [poang, setPoang] = useState<(number | null)[]>(Array(ovningar.length).fill(null));

  // Summering
  const totalPoang = poang.reduce((sum: number, val) => val ? sum + val : sum, 0);
  const maxPoang = ovningar.length * 10;

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
          {ovningar.map((ovning, i) => (
            <Ovning
              key={i}
              namn={ovning.namn}
              beskrivning={ovning.beskrivning}
              varden={ovning.varden}
              onScore={(score) => {
                setPoang(prev => {
                  const arr = [...prev];
                  arr[i] = score;
                  return arr;
                });
              }}
            />
          ))}

          {/* Extra övning på sämsta resultat */}
          {(() => {
            // Hitta index för sämsta (lägsta) poäng, men bara bland de som är ifyllda
            let minIdx: number | null = null;
            let minVal: number | null = null;
            poang.forEach((val, idx) => {
              if (val !== null && (minVal === null || val < minVal)) {
                minVal = val;
                minIdx = idx;
              }
            });
            if (minIdx !== null) {
              const ovning = ovningar[minIdx];
              return (
                <Ovning
                  key={"extra-" + minIdx}
                  namn={"Extra: " + ovning.namn}
                  beskrivning={"Extra träning på din svagaste övning."}
                  varden={ovning.varden}
                  onScore={() => {}}
                />
              );
            }
            return null;
          })()}
        </tbody>
      </table>
      <div style={{ maxWidth: 900, margin: '24px auto 0', fontSize: '1.2em', textAlign: 'right' }}>
        <b>Summa:</b> {totalPoang} / {maxPoang}
      </div>
    </div>
  );
}

export default App
