import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Error404 } from '../errors/Error404';
import { Contact } from '../pages/Contact';
import { Home } from '../pages/Home';
import { Services } from '../pages/Services';
import { Tableu } from '../pages/Tableu';
import { Us } from '../pages/Us';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/us" element={ <Us /> } />
                <Route path="services" element={ <Services /> } />
                <Route path="tableu" element={ <Tableu /> } />
                <Route path="contact-us" element={ <Contact /> } />
                <Route path="*" element={ <Error404 /> } />
            </Routes>
        </BrowserRouter>
    );
}