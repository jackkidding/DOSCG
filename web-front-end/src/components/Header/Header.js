import React from 'react'

class Header extends React.Component {
    render() {
        return (
            <div class="card-header">
                <ul class="nav nav-tabs card-header-tabs">
                <li class="nav-item">
                    <a class="nav-link" href="/" >My CV</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/DOSCG/xyz" >Finding X, Y, Z</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/DOSCG/bc" >Finding B & C</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/DOSCG/map" >Map Direction</a>
                </li>
                </ul>
            </div>
        )

    }
}

export default Header;