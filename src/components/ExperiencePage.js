// src/components/ExperiencePage.js
function ExperiencePage() {
    // Reemplaza "VIDEO_ID" con el ID real de tu video de YouTube
    // Por ejemplo, si la URL es https://www.youtube.com/watch?v=dQw4w9WgXcQ, el ID es dQw4w9WgXcQ
    const videoId = "dQw4w9WgXcQ"; // Cambia esto por el ID de tu video
    const embedUrl = `https://www.youtube.com/embed/${videoId}`;

    return (
        <div>
            <h2>Experiencia Personal</h2>
            <p>Aquí puedes compartir un video que te represente o muestre algo sobre tu experiencia.</p>
            <div className="video-container">
                <iframe
                    src={embedUrl}
                    title="Video de Experiencia Personal"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
}
