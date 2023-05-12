import '../../styles/components/layout/Nav.css';
import { NavLink } from "react-router-dom";


const Nav = (props) => {
    return (
        <nav>
            <div>
                <ul>
                    <li>< NavLink to="/" className={({ isActive }) => isActive ? "activo" : undefined}>Home</ NavLink></li>
                    <li>< NavLink to="/tendencias" className={({ isActive }) => isActive ? "activo" : undefined}>Nuevas Tendencias</ NavLink></li>
                    <li>< NavLink to="/looks" className={({ isActive }) => isActive ? "activo" : undefined}>Get the Look</ NavLink></li>
                    <li>< NavLink to="/novedades" className={({ isActive }) => isActive ? "activo" : undefined}>Novedades</ NavLink></li>
                    <li>< NavLink to="/contacto" className={({ isActive }) => isActive ? "activo" : undefined}>Contacto</ NavLink></li>
                </ul>
            </div>

        </nav>
    );
}

export default Nav;