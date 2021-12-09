import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Header & Footer Connected
import Header from './Header';
import Footer from './Footer';

// Creating Class App Extended with React Component For Header & Footer.
class App extends React.Component {

  render() {
    return (
      <div className="maincontainer">

        {/* Rendering Route Connect Header */}
        <Header></Header>
        <h1 className="mr-5 mt-5 text-center">Header Upper Contain</h1>

        {/* Div for Main Container */}
        <div className="container mb-5 mt-5 text-center">
          <h1 className="mr-5 mt-5">Main Container </h1>
        </div>

        {/* Rendering Route Connect Footer */}
        <Footer></Footer>

      </div>
    )
  };
}
export default App;