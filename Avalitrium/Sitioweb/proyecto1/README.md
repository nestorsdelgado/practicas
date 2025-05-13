
<!DOCTYPE html>
<html lang="es"> 
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Avalitrium</title> 
    <link rel="stylesheet" href="css/main.css">
</head>
<body>
    <header>
        <div class="logo-container"> 
            <img src="img/latest.png" alt="Logo de Avalitrium" class="centrada"> 
        </div>
        
        <div class="container"> 
            <h1 class="titulo">Avalitrium</h1>
            
            <nav class="navegacion-principal nav-bg" aria-label="Navegación principal">
                <a href="#">Galería</a>
                <a href="#">Sobre Avalitrium</a>
                <a href="#">Mundo</a>
                <a href="#">Comunidad</a>
            </nav>
        </div>
    </header>
</body>
</html>

    <section>
        <h2>Forja tu destino</h2>
        <p>Sumérgete en un vasto mundo abierto de fantasía medieval donde la magia y la herrería se entrelazan en una épica aventura.</p>
        <a href="#">Descubre más</a>
    </section>

    <section>
        <div>
            <div>
                <h2>Acerca del juego</h2>
            </div>
            <div>
                <div">
                    <p>Avalitrium es un juego de rol de mundo abierto ambientado en un vasto reino de fantasía medieval. Como un humilde herrero con un don especial, te embarcarás en un viaje épico que determinará el destino de todo el reino.</p>
                    <p>Inspirado en las ricas tradiciones de El Señor de los Anillos y Juego de Tronos, Avalitrium ofrece un mundo inmersivo lleno de intrigas políticas, criaturas místicas, magia ancestral y batallas épicas.</p>
                    <p>Explora vastos paisajes, desde montañas nevadas hasta bosques encantados, ciudades amuralladas y ruinas antiguas. Forja alianzas, mejora tus habilidades de herrería y descubre los secretos arcanos que yacen ocultos en las sombras.</p>
                </div>
                <div>
                    <img src="" alt="Paisaje de Avalitrium">
                </div>
            </div>
        </div>
    </section>
    
    <section>
        <div>
            <div>
                <h2>Características principales</h2>
            </div>
            <div>
                <div>
                    <div>⚔️</div>
                    <h3>Mundo abierto</h3>
                    <p>Explora un vasto mundo lleno de secretos, tesoros y peligros. Cada rincón del mapa tiene una historia que contar y recompensas que descubrir.</p>
                </div>
                <div>
                    <div>🔨</div>
                    <h3>Sistema de herrería</h3>
                    <p>Domina el arte de la forja. Crea y mejora armas, armaduras y objetos mágicos únicos que te ayudarán en tu aventura.</p>
                </div>
                <div>
                    <div>✨</div>
                    <h3>Magia ancestral</h3>
                    <p>Descubre y domina antiguos hechizos. Combina la magia con tus creaciones de herrería para forjar artefactos legendarios.</p>
                </div>
            </div>
        </div>
    </section>

    <section>
        <div>
            <div>
                <h2>El protagonista</h2>
            </div>
            <div>
                <div>
                    <img src="/placeholder.svg?height=500&width=400" alt="El herrero protagonista">
                </div>
                <div>
                    <h3>El herrero destinado</h3>
                    <p>Nacido en un pequeño pueblo fronterizo, nuestro protagonista aprendió el oficio de la herrería de su padre. Sin embargo, pronto descubrió que poseía un don único: la capacidad de infundir magia en los metales que forjaba.</p>
                    <p>Cuando fuerzas oscuras amenazan su hogar, debe emprender un viaje para perfeccionar sus habilidades y descubrir el origen de su poder. A lo largo de su aventura, forjará alianzas con nobles, magos y guerreros, enfrentándose a enemigos poderosos y desvelando secretos antiguos.</p>
                    <p>Tu camino como herrero te llevará desde humildes inicios hasta convertirte en una leyenda cuyas creaciones podrían salvar el reino... o condenarlo a la oscuridad eterna.</p>
                </div>
            </div>
        </div>
    </section>
</body>
</html>


<---------------------------- STYLE ---------------------------->
:root {
    --color-fondo: #151515;
    --color-primario: #755C1D;
    --color-texto: #FFFFFF;
    --color-texto-secundario: #000000;
    --fuente-principal: 'Arial', sans-serif;
}


* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


body {
    background-color: var(--color-fondo);
    color: var(--color-texto);
    font-family: var(--fuente-principal);
    line-height: 1.6;
}


.container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px 0; 
}


.logo-container {
    padding: 10px 0;
    background-color: var(--color-fondo);
}


.centrada {
    display: block;
    margin: 0 auto;
    max-width: 100%;
    height: auto;
}


.titulo {
    color: var(--color-primario);
    text-align: center;
    font-size: 2.5rem; 
    margin: 0.5rem 0;
    text-transform: uppercase;
    letter-spacing: 2px;
}


.nav-bg {
    background-color: var(--color-primario);
    width: 100%;
    padding: 10px 0;
}


.navegacion-principal {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px; 
}


@media (min-width: 768px) {
    .navegacion-principal {
        flex-direction: row;
        justify-content: center;
        gap: 20px;
    }
}


.navegacion-principal a {
    display: block;
    text-align: center;
    color: var(--color-texto-secundario);
    text-decoration: none;
    font-size: 1.25rem;
    font-weight: 700;
    padding: 10px 20px;
    transition: all 0.3s ease;
    border-radius: 4px;
}


.navegacion-principal a:hover {
    background-color: rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
}

.navegacion-principal a:focus {
    outline: 2px solid var(--color-texto);
    outline-offset: 2px;
}

