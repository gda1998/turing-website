import { Link } from 'react-router-dom';
import VideoBackground from './VideoBackground';

export const Navbar = ({ urlVideo }) => {
    const offCanvasCollapse = () => document.querySelector('.offcanvas-collapse').classList.toggle('open');

    return (
        <header className='navbar-background text-white'>
            <VideoBackground urlVideo={ urlVideo } />
            <h1 className='px-5'>Bienvenido</h1>
            <h2 className='px-5'>Hacemos las cosas fáciles</h2>
            <nav className="navbar navbar-expand-lg fixed-top navbar-dark p-md-5 text-white" aria-label="Main navigation">
                <div className="container-fluid">
                    <span className='navbar-brand'>Turing-IA</span>
                    <button 
                        className="navbar-toggler p-0 border-0"
                        onClick={ offCanvasCollapse }
                        type="button" id="navbarSideCollapse" 
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Inicio</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/us">Nosotros</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/services">Servicios</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/tableu">Tableu</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact-us">Contact</Link>
                            </li>
                            <li className="nav-item">
                                <button className="btn btn-outline-light" type="button">Search</button>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="dropdown01" data-bs-toggle="dropdown" aria-expanded="false">Language</a>
                                <ul className="dropdown-menu bg-secondary" aria-labelledby="dropdown01">
                                    <li><a className="dropdown-item" href="#">English</a></li>
                                    <li><a className="dropdown-item" href="#">Spanish</a></li>
                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <button className="btn btn-outline-info" type="button">
                                <i class="bi bi-search"></i>
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
        </header>
    );
}
