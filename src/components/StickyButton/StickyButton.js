import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const StickyButton = () => {

    const [location, setLocation] = useState()

    let pathLocation = useLocation();
    useEffect(() => {
        setLocation(pathLocation.pathname);
    }, [pathLocation.pathname])


    return (
        <div>
            {
                location === '/home' || location === '/' ? <a href='#home' className="btn btn-sticky"><FontAwesomeIcon icon={faArrowAltCircleUp} /></a> :
                    <Link to='/home' className="btn btn-sticky"><FontAwesomeIcon icon={faHome} /></Link>
            }
        </div>
    );
};

export default StickyButton;