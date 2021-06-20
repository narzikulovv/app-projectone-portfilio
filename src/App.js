import './sass/sardor.scss'
import './sass/baxtiyor.scss';
import Navbar from "./Components/Navbar";


import Banner from './Components/Banner';
import Reklama from './Components/Reklama';
import Tovar from './Components/Tovar';
import Online from './Components/Online';
function App() {
    return (
        <div className="App">
            <Navbar/>
            <Banner/>
            <Reklama />
            <Tovar />
            <Online />
        </div>
    );
}

export default App;
