import { Link } from 'react-router-dom';
import { useLang } from '../hooks/useLang';

export const Navbar = () => {
    const [t, handleLangToggle] = useLang();
    const offCanvasCollapse = () => document.querySelector('.offcanvas-collapse').classList.toggle('open');

    return (
        <nav className="navbar navbar-expand-lg navbar-dark p-md-5 text-white" aria-label="Main navigation">
            <div className="container-fluid">
                <span className='navbar-brand'>Turing-IA</span>
                <button
                    className="navbar-toggler p-0 border-0"
                    onClick={offCanvasCollapse}
                    type="button" id="navbarSideCollapse"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">{t('titles.home')}</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/us">{t('titles.us')}</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/services">{t('titles.services')}</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/tableu">{t('titles.tableu')}</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact-us">{t('titles.contact')}</Link>
                        </li>
                        <li className="nav-item">
                            <button className="btn btn-outline-light" type="button">{t('titles.lets_talk')}</button>
                        </li>
                        <li className="nav-item dropdown">
                            <button className="nav-link dropdown-toggle btn border-0" id="dropdown01" data-bs-toggle="dropdown" aria-expanded="false">{t('language.language')}</button>
                            <ul className="dropdown-menu bg-secondary" aria-labelledby="dropdown01">
                                <li><button className='dropdown-item' onClick={() => handleLangToggle('en')}>{t('language.english')}</button></li>
                                <li><button className='dropdown-item' onClick={() => handleLangToggle('es')}>{t('language.spanish')}</button></li>
                            </ul>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <button className="btn btn-outline-info" type="button">
                            <i className="bi bi-search"></i>
                        </button>
                    </form>
                </div>
            </div>
        </nav>
    );
}