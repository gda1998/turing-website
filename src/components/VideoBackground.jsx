import PropTypes from 'prop-types';

const VideoBackground = ({ urlVideo, title, subtitle }) => {
    return (
        <>
            <video autoPlay muted loop id="videoBackground">
                <source src={ urlVideo } type="video/mp4" />
            </video>
            <h1 className='px-5'>{ title }</h1>
            <h2 className='px-5'>{ subtitle }</h2>
        </>
    )
}

VideoBackground.propTypes = {
    urlVideo: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired
}

export default VideoBackground