import { NavLink } from "react-router-dom"
import './header.css'


function Header() {
    return (
        <header>
            <NavLink to="/perfil">Perfil</NavLink>
            <h3>Receitas</h3>
        </header>
    )
}

export default Header