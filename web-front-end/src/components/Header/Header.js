import React from 'react'

class Header extends React.Component {
    render() {
        return (
            <div class="card-header">
                <ul class="nav nav-tabs card-header-tabs">
                <li class="nav-item">
                    <a class="nav-link" href="/" data-toggle="tab" aria-selected="true">My CV</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/" data-toggle="tab" aria-selected="false">Finding X, Y, Z</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/" data-toggle="tab" aria-selected="false">Finding B & C</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/DOSCG/map" data-toggle="tab" aria-selected="false">Map Direction</a>
                </li>
                </ul>
            </div>
        )

    }
}

export default Header;