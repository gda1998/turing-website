import React from 'react'
import PropTypes from 'prop-types'

const VideoBackground = ({ urlVideo }) => {
    return (
        <video autoPlay muted loop id="videoBackground">
            <source src={ urlVideo } type="video/mp4" />
        </video>
    )
}

VideoBackground.propTypes = {
    urlVideo: PropTypes.string.isRequired
}

export default VideoBackground