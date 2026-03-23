import './App.css'
import Ovning from './components/Ovning/Ovning';


function App() {
  // En state per övning för input och score
  // const [inputs, setInputs] = useState<{ [id: string]: any }>({});
  // const [scores, setScores] = useState<{ [id: string]: number | null }>({});

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
