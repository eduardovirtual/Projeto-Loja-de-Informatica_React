import {Outlet, Link} from "react-router-dom";
function Nav() {
    return(
        <>
        <nav className="menu">
        <ul>
            <li><Link href="index.html">HOME</Link></li>
            <li><Link href="produtos.html">PRODUTOS</Link></li>
            <li><Link href="servicos.html">SERVIÇOS</Link></li>
            <li><Link href="contatos.html">CONTATOS</Link></li>
        </ul>
        <div className="social-icons">
            <a href="http://www.facebook.com" className="btn-facebook"><i><i className="fa-brands fa-facebook"></i></i></a>
            <a href="http://www.twitter.com" className="btn-twitter"><i><i className="fa-brands fa-twitter"></i></i></a>
            <a href="http://www.google.com" className="btn-google"><i><i className="fa-brands fa-google"></i></i></a>
        </div>
        <Outlet />
    </nav>
        </>
    )
}
export default Nav;