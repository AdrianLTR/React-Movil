// src/components/HomePage.js
function HomePage() {
    return (
        <div>
            <h2>Página Inicial</h2>
            <div className="profile-data">
                {/* Asegúrate de tener una imagen llamada "foto.jpg" en la carpeta public/images/ */}
                <img src="../public/images/foto.jpg" alt="Foto 2x2" />
                <p><strong>Nombre:</strong> Adrian</p>
                <p><strong>Apellido:</strong> Lorenzo</p>
                <p><strong>Correo Electrónico:</strong> adrianlorenzotorres@gmail.com</p>
            </div>
        </div>
    );
}
