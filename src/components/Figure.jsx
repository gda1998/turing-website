import React from 'react'

export const Figure = () => {
    return (
        <figure className="figure">
            <img src="https://loremflickr.com/640/480" className="figure-img img-fluid" alt="Out work" />
            <figcaption class="figure-caption bg-light text-end">A caption for the above image.</figcaption>
        </figure>
    );
}