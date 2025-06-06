// src/components/TranslatorPage.js
function TranslatorPage() {
    const [numberInput, setNumberInput] = React.useState('');
    const [numberInWords, setNumberInWords] = React.useState('');

    const unidades = ['', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve'];
    const decenas = ['', 'diez', 'veinte', 'treinta', 'cuarenta', 'cincuenta', 'sesenta', 'setenta', 'ochenta', 'noventa'];
    const especiales = ['diez', 'once', 'doce', 'trece', 'catorce', 'quince', 'dieciséis', 'diecisiete', 'dieciocho', 'diecinueve'];
    const centenas = ['', 'ciento', 'doscientos', 'trescientos', 'cuatrocientos', 'quinientos', 'seiscientos', 'setecientos', 'ochocientos', 'novecientos'];

    const numberToWordsEs = (num) => {
        if (num === 0) return 'cero';
        if (num < 0 || num > 1000) return 'Número fuera de rango (1-1000)';
        if (num === 1000) return 'mil';
        if (num === 100) return 'cien';

        let words = '';

        if (num >= 100) {
            const c = Math.floor(num / 100);
            words += centenas[c];
            num %= 100;
            if (num > 0) words += ' ';
        }

        if (num >= 10 && num <= 19) {
            words += especiales[num - 10];
        } else if (num >= 20) {
            const d = Math.floor(num / 10);
            words += decenas[d];
            num %= 10;
            if (num > 0) words += ' y ';
        } else if (num > 0 && num < 10 && words !== '' && !words.startsWith(centenas[1])) { // Avoid "ciento y uno"
             // if it's like 201, 301, etc. we don't add 'y'
            if (Math.floor(num/100) > 0 && num < 10 && words.endsWith(centenas[Math.floor(num/100)])){
                 // no action needed
            } else {
                 words += ' y ';
            }
        }


        if (num > 0 && !(num >= 10 && num <=19)) {
             if (words.endsWith('veinte ') && num > 0) { // specific case for veinte y uno, veinte y dos ...
                words = words.slice(0, -1) + 'i'; // change to veinti
            } else if (words.endsWith('treinta ') && num > 0) {
                // no action needed
            } // Add other similar cases if needed for other tens

            words += unidades[num];
        }
         // Special case for 21-29, change 'veinte y uno' to 'veintiuno'
        if (words.startsWith('veinte y ')) {
            words = 'veinti' + words.substring('veinte y '.length);
        }

        return words.trim();
    };

    const handleTranslate = () => {
        const num = parseInt(numberInput);
        if (!isNaN(num)) {
            setNumberInWords(numberToWordsEs(num));
        } else {
            setNumberInWords('Entrada inválida');
        }
    };

    return (
        <div>
            <h2>Traductor de Números a Letras</h2>
            <div className="form-group">
                <label htmlFor="numberToTranslate">Número (1-1000):</label>
                <input
                    type="number"
                    id="numberToTranslate"
                    value={numberInput}
                    onChange={(e) => setNumberInput(e.target.value)}
                    min="1"
                    max="1000"
                />
            </div>
            <button onClick={handleTranslate} className="submit-button">Traducir</button>
            {numberInWords && (
                <div className="result">
                    <p>{numberInWords}</p>
                </div>
            )}
        </div>
    );
}
