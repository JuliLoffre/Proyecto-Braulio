import '../styles/components/pages/TendenciasPage.css';

const TendenciasPage = (props) => {
    return (
        <main className="holder">
            <div className="historia">
                <h2>Tendencias</h2>
                <p></p>
                <p>Descubri de qué prendas se esta hablando en este momento.
                </p>
            </div>
            <div className="fashion">
                <div className="tendencias">
                    <div className="tendencia">
                        <img src="img/tendencias/abrigos.jpeg" alt="abrigos" />
                        <h5>Nuevos Hoodies</h5>
                        <h6>Abrigos</h6>
                        <p>Nuevos hoodies lisos en varios colores</p>
                    </div>
                    <div className="tendencia">
                        <img src="img/tendencias/remeras.jpeg" alt="remeras" />
                        <h5>Nuevas Remeras</h5>
                        <h6>Remeras</h6>
                        <p>Nuevas remeras con estampado EVIDENCE en color oscuro.</p>
                    </div>
                    <div className="tendencia">
                        <img src="img/tendencias/pantalones.jpeg" alt="pantalones" />
                        <h5>Joggers</h5>
                        <h6>Jeans y Pantalones</h6>
                        <p>Nuevos pantalones estilos joggers, con un estilo relajado y comodos para el dia a dia.</p>
                    </div>
                    <div className="tendencia">
                        <img src="img/tendencias/bermudas.jpeg" alt="bermudas" />
                        <h5>Short Kenny Gabardina</h5>
                        <h6>Bermudas y Shorts</h6>
                        <p>Short de gabardina disponible en color Negro o Verde Oscuro.</p>
                    </div>
                </div>
            </div>

        </main>
    );
}

export default TendenciasPage;