// src/components/HomePage.js
function HomePage() {
    return (
        <div>
            <h2>Bienvenido a Mi Aplicación</h2>
            <div className="profile-data">
                {/* Asegúrate de tener una imagen llamada "foto.jpg" en la carpeta public/images/ */}
                <img src="../public/images/foto.jpg" alt="Foto 2x2" />
                <h3 style={{ marginTop: '10px', color: '#4e54c8', fontWeight: '600' }}>Adrian Lorenzo</h3>
                <p style={{ fontSize: '1.1rem' }}><i className="fas fa-envelope"></i> adrianlorenzotorres@gmail.com</p>
                <p style={{ color: '#666', marginTop: '15px' }}>Desarrollador Web y Móvil</p>
                <div style={{ display: 'flex', gap: '15px', marginTop: '15px' }}>
                    <span style={{ 
                        background: 'linear-gradient(145deg, #4e54c8, #8f94fb)', 
                        color: 'white', 
                        padding: '5px 10px', 
                        borderRadius: '5px', 
                        fontSize: '0.9rem' 
                    }}>React</span>
                    <span style={{ 
                        background: '#f0f0f0', 
                        color: '#333', 
                        padding: '5px 10px', 
                        borderRadius: '5px', 
                        fontSize: '0.9rem' 
                    }}>JavaScript</span>
                </div>
            </div>
        </div>
    );
}
