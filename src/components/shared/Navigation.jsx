import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return ( 
        <nav>
            <ul>
                <li>
                    <Link id="list" to="/">Home</Link>
                    <Link id="list" to="/about">About</Link>
                    <Link id="list" to="/data">Data</Link>
                </li>
            </ul>
        </nav>
     );
}
 
export default Navigation;