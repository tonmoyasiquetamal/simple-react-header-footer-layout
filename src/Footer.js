import React from 'react';

// Bootstrap Use for Showing Header Simplify
import 'bootstrap/dist/css/bootstrap.min.css';

// Header Extends for Renderring with App.Js
class Footer extends React.Component {
    render() {
        return (
            //  {/* Div for Footer */}
            <div class="text-center text-muted container mb-5 mt-5">
                <h1 className="mr-5 mt-5 text-center">Hello! I'm Footer </h1>
            </div>
        )
    }
}
export default Footer;