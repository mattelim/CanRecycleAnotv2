import React from 'react';

const Footer = ({title}) => {
    return (
        <footer>
            <p>© <i>{title}</i> {new Date().getFullYear()}</p>
            <p><small><a href="https://www.nea.gov.sg/docs/default-source/our-services/waste-management/list-of-items-that-are-recyclable-and-not.pdf"> Information</a> adapted from <a href="https://www.nea.gov.sg/">National Environment Agency Singapore</a></small></p>
        </footer>
    )
}

export default Footer
