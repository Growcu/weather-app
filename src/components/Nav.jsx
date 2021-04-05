import React from 'react';

import '../styles/Nav.scss';

const Nav = () => (
    <nav className="nav">
        <ul className="nav_list">
            <li><a href="/CurrentLocation" className="nav_item">Lokalizacja</a></li>
            <li><a href="/OtherLocation" className="nav_item">Inna miasto</a></li>
        </ul>
    </nav>
);
export default Nav;
