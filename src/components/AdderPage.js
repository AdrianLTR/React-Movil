// src/components/AdderPage.js
function AdderPage() {
    const [num1, setNum1] = React.useState('');
    const [num2, setNum2] = React.useState('');
    const [sum, setSum] = React.useState(null);

    const handleSum = () => {
        const result = parseFloat(num1) + parseFloat(num2);
        if (!isNaN(result)) {
            setSum(result);
        } else {
            setSum('Entrada inválida');
        }
    };

    return (
        <div>
            <h2>Sumadora</h2>
            <div className="form-group">
                <label htmlFor="num1">Número 1:</label>
                <input
                    type="number"
                    id="num1"
                    value={num1}
                    onChange={(e) => setNum1(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="num2">Número 2:</label>
                <input
                    type="number"
                    id="num2"
                    value={num2}
                    onChange={(e) => setNum2(e.target.value)}
                />
            </div>
            <button onClick={handleSum} className="submit-button">Sumar</button>
            {sum !== null && (
                <div className="result">
                    <p>Resultado: {sum}</p>
                </div>
            )}
        </div>
    );
}
