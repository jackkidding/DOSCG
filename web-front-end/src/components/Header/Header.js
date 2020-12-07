import React from 'react'

class Header extends React.Component {
    render() {
        return (
            <div className="card-header">
                <ul className="nav nav-tabs card-header-tabs">
                <li className="nav-item">
                    <a className="nav-link" href="/DOSCG/cv" >My CV</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/DOSCG/xyz" >Finding X, Y, Z</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/DOSCG/bc" >Finding B & C</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/DOSCG/map" >Map Direction</a>
                </li>
                </ul>
            </div>
        )

    }
}

export default Header;