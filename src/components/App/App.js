import React from "react";
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import About from '../About/About';
import Experiance from '../Experiance/Experiance';
import Services from '../Services/Services';
import Portfolio from '../Portfolio/Portfolio';
// import Testimon from '../Testimon/Testimon';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';








const App = () => {
    return (
        <div>
            <Header />
            <Nav />
            <About />
            <Experiance />
            {/* <Services /> */}
            <Portfolio />
            {/* <Testimon /> */}
            <Contact />
            <Footer />
        </div>
    )
}


export default App;