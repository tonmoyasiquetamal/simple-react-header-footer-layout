import React from 'react';

// Bootstrap Use for Showing Header Simplify
import 'bootstrap/dist/css/bootstrap.min.css';

// Header Extends for Renderring with App.Js
class Header extends React.Component {
    render() {
        return (
            <nav class="navbar navbar-expand-sm bg-gradient navbar-info bg-warning ">
                {/* ul & li for connectable Link */}
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="https://www.linkedin.com/in/tonmoy-asique-tamal/">LinkedIN</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="https://www.github.com/tonmoyasiquetamal/">Github</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="https://www.twitter.com/TonmoyAsique/">Twitter</a>
                    </li>
                </ul>
            </nav>

        )
    }
}
export default Header;