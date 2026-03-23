import { useState } from 'react';

interface OvningProps {
    namn: string;
    beskrivning: string;
    varden: (string | number | null)[]; // Värden som motsvarar poäng 1-10
    onScore?: (score: number) => void;
}

const Ovning = ({ namn, beskrivning, varden, onScore }: OvningProps) => {
    const [valdPoang, setValdPoang] = useState<number | null>(null);

    const handleClick = (poang: number) => {
        setValdPoang(poang);
        if (onScore) onScore(poang);
    };

    return (
        <tr>
            <td style={{ border: '1px solid #ccc', padding: 8, fontWeight: 600 }}>
                <div>{namn}</div>
                <div style={{ fontSize: '0.9em', color: '#555' }}>{beskrivning}</div>
            </td>
            {varden.map((v, idx) => (
                v === null || v === undefined ? (
                    <td
                        key={idx}
                        style={{ border: '1px solid #ccc', padding: 8, background: '#f9f9f9' }}
                    >
                        {/* tom cell */}
                    </td>
                ) : (
                    <td
                        key={idx}
                        style={{
                            border: '1px solid #ccc',
                            padding: 8,
                            cursor: 'pointer',
                            background: valdPoang === idx + 1 ? '#b3ffd1' : undefined,
                            fontWeight: valdPoang === idx + 1 ? 700 : 400,
                            transition: 'background 0.2s',
                        }}
                        onClick={() => handleClick(idx + 1)}
                    >
                        {v}
                    </td>
                )
            ))}
            <td style={{ border: '1px solid #ccc', padding: 8, fontWeight: 'bold', fontSize: '1.1em', textAlign: 'center', background: '#e6ffe6' }}>
                {valdPoang ? `${valdPoang}` : '-'}
            </td>
        </tr>
    );
};

export default Ovning;