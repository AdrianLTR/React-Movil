// src/components/MultiplicationTablePage.js
function MultiplicationTablePage() {
    const [numberInput, setNumberInput] = React.useState('');
    const [table, setTable] = React.useState([]);
    const [inputNumberForTable, setInputNumberForTable] = React.useState(null);

    const generateTable = () => {
        const num = parseInt(numberInput);
        if (!isNaN(num)) {
            const newTable = [];
            for (let i = 1; i <= 13; i++) {
                newTable.push({ multiplicand: i, result: num * i });
            }
            setTable(newTable);
            setInputNumberForTable(num);
        } else {
            setTable([]);
            setInputNumberForTable(null);
            alert("Por favor, ingrese un número válido.");
        }
    };

    return (
        <div>
            <h2>Tabla de Multiplicar</h2>
            <div className="form-group">
                <label htmlFor="numberForTable">Número:</label>
                <input
                    type="number"
                    id="numberForTable"
                    value={numberInput}
                    onChange={(e) => setNumberInput(e.target.value)}
                />
            </div>
            <button onClick={generateTable} className="submit-button">Mostrar Tabla</button>

            {inputNumberForTable !== null && table.length > 0 && (
                <div className="multiplication-table result">
                    <h3>Tabla del {inputNumberForTable}</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Multiplicando</th>
                                <th>Resultado</th>
                            </tr>
                        </thead>
                        <tbody>
                            {table.map((item, index) => (
                                <tr key={index}>
                                    <td>{inputNumberForTable} x {item.multiplicand}</td>
                                    <td>{item.result}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}
