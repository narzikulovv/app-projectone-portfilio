import './sass/sardor.scss'
import './sass/baxtiyor.scss';
import Navbar from "./Components/Navbar";


import Banner from './Components/Banner';
import Kategoriya from "./Components/Kategoriya";
import Shivaki from "./Components/Shivaki";
import Footer from "./Components/Footer";


function App() {
    return (
        <div className="App">
            <Navbar/>
            <Banner/>

            <Kategoriya/>

            <Shivaki/>


            <Footer/>
        </div>
    );

}

export default App;
