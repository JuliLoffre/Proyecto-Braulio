import '../styles/components/pages/LooksPage.css';

const LooksPage = (props) => {
    return (
        <main className="holder">
            <div className="historia">
            <h2>Get the Look</h2>
            <p>Aquí vas a poder encontrar ideas de los looks de nuestros influencers para no estar horas parado delante del guardarropas sin saber qué ponerte.</p>
            </div>
            <div className="looks">
                <img src="img/looks/mens-shirt.jpg" alt="" />
                <img src="img/looks/man glasses.jpg" alt="" />
                <img src="img/looks/man jacket.jpg" alt="" />
                <img src="img/looks/man laughs.jpg" alt="" />
                <img src="img/looks/man leather.jpeg" alt="" />
            </div>
        </main>
    );
}

export default LooksPage;