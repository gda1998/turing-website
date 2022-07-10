import { useLang } from '../hooks/useLang';
import { OutWork } from '../components/Home/OutWork';
import VideoBackground from '../components/VideoBackground';
import '../styles/home.css';

export const Home = () => {
    const [ t ] = useLang();

    return (
        <>
            <header className='navbar-background text-white'>
                <VideoBackground urlVideo="assets/videos/index-navbar-background.mp4" title={ t('home.welcome') } subtitle={ t('home.message_header') } />
            </header>
            <div className='py-5 bg-white'>
                <div className="container">
                    <div className='header-page my-3'>
                        <h3 className='text-primary text-uppercase'>{ t('home.what_we_do') }</h3>
                        <h1>{ t('home.what_is_turing') }</h1>
                        <button className='btn btn-lg my-3 btn-outline-primary'>{ t('more_info') }</button>
                    </div>
                    <OutWork />
                </div>{/* /.container */}
            </div>{/* /.py-5 bg-white */}
            <div className="py-5 bg-light">
                <div className="container">
                    <h4 className='text-primary text-uppercase'>{ t('home.technologies_we_use') }</h4>
                    <div className="row py-5">
                        <div className="col-md-2">Hello World</div>
                        <div className="col-md-2">Hello World</div>
                        <div className="col-md-2">Hello World</div>
                        <div className="col-md-2">Hello World</div>
                        <div className="col-md-2">Hello World</div>
                        <div className="col-md-2">Hello World</div>
                    </div>
                </div>
            </div>
        </>
    );
}