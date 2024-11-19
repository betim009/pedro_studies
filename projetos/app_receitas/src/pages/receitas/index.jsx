import { categorias } from "../../mocks/categories"
import { receitas } from "../../mocks/meals"
import { Link } from "react-router-dom"
import './receitas.css'


function Receitas() {
    return (
        <>
            <h2>Receitas</h2>
            {categorias.map((element) => (
                <Link className="receita">{element.strCategory}</Link>
            ))}

            {
                // Fazer o map das imagens e titulos das receitas
            }
        </>
    )
}

export default Receitas