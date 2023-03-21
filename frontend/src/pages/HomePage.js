import '../styles/components/pages/HomePage.css';

const HomePage = (props) => {
    return (
        <main className="holder">
            <div className="homeimg">
                <img src="img/home/men.png" width="100%" alt="men" />
            </div>
            <div className="columnas">
                <div className="bienvenidos">
                    <h2>Bienvenidos</h2>
                    <p>En Braulio Store, vas a encontrar no solo las mejores prendas, también vas a poder descubrir nuevas
                        tendencias y seguir tus looks favoritos para mantenerte siempre a la moda.</p>
                    <p>Segui de cerca los looks de tus creadores favoritos, y explora nuevos estilos todos los dias.</p>
                </div>
                <div className="experiencias">
                    <h2>Experiencias</h2>
                    <div className="experiencia">
                        <span className="cita">Excelente calidad!!</span>
                        <span className="autor">Juan Perez - Remera</span>
                    </div>
                </div>
            </div>

        </main>
    );
}

export default HomePage;