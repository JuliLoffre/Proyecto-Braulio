import { useState, useEffect } from 'react';
import axios from 'axios';
import NovedadItem from '../components/novedades/NovedadItem';
import '../styles/components/pages/NovedadesPage.css';


                
const NovedadesPage = (props) => {
    const [loading, setLoading] = useState(false);
    const [novedades, setNovedades] = useState([]);

    useEffect(() => {
        const cargarNovedades = async () => {
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/novedades');
            setNovedades(response.data);
            setLoading(false);
        };

        cargarNovedades();
    }, []);

    return (
        <section className="holder">
            <div className="historia">
            <h2>Novedades</h2>
            <p>En esta sección encontraras las ultimas prendas que llegaron.</p>
            </div>
            {
                loading ? (
                    <p>Cargando...</p>
                ) : ( 
                    novedades.map(item => <NovedadItem key={item.id}
                        title={item.titulo} subtitle={item.subtitulo}
                        imagen={item.imagen} body={item.cuerpo} />)
                        
                )
            }
        </section>
    )
};

export default NovedadesPage;