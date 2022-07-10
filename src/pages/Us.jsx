import VideoBackground from '../components/VideoBackground';

export const Us = () => {
    return (
        <>
            <header className='navbar-background text-white'>
                <VideoBackground urlVideo="assets/videos/video.mp4" title={ 'Nosotros' } subtitle={ 'Hola Mundo' } />
            </header>
            <div className='bg-danger h-50'>
                <h1>Otro encabezado</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos modi facilis aspernatur nostrum repellendus officiis ipsum odio doloribus mollitia veritatis ab nulla, quaerat placeat, consequatur rem quas esse magni vel.</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos modi facilis aspernatur nostrum repellendus officiis ipsum odio doloribus mollitia veritatis ab nulla, quaerat placeat, consequatur rem quas esse magni vel.</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos modi facilis aspernatur nostrum repellendus officiis ipsum odio doloribus mollitia veritatis ab nulla, quaerat placeat, consequatur rem quas esse magni vel.</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos modi facilis aspernatur nostrum repellendus officiis ipsum odio doloribus mollitia veritatis ab nulla, quaerat placeat, consequatur rem quas esse magni vel.</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos modi facilis aspernatur nostrum repellendus officiis ipsum odio doloribus mollitia veritatis ab nulla, quaerat placeat, consequatur rem quas esse magni vel.</p>
            </div>
        </>
    );
}
