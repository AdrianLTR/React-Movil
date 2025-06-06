// src/components/Navbar.js
function Navbar({ setActivePage, activePage }) {
    return (
        <nav>
            <ul>
                <li><button className={activePage === 'home' ? 'active' : ''} onClick={() => setActivePage('home')}>Página Inicial</button></li>
                <li><button className={activePage === 'adder' ? 'active' : ''} onClick={() => setActivePage('adder')}>Sumadora</button></li>
                <li><button className={activePage === 'translator' ? 'active' : ''} onClick={() => setActivePage('translator')}>Traductor Números</button></li>
                <li><button className={activePage === 'multiplier' ? 'active' : ''} onClick={() => setActivePage('multiplier')}>Tabla Multiplicar</button></li>
                <li><button className={activePage === 'experience' ? 'active' : ''} onClick={() => setActivePage('experience')}>Experiencia Personal</button></li>
            </ul>
        </nav>
    );
}
