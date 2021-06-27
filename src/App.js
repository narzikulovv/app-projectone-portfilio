import './sass/sardor.scss'
import './sass/baxtiyor.scss';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import HomePages from "./pages/HomePages";
import RegisterPages from "./pages/RegisterPages";
import PrivateHomePages from "./pages/PrivateHomePages";
import NotFound from "./pages/NotFound";
import Banner from "./Components/Banner";
import Kategoriya from "./Components/Kategoriya";
import Reklama from "./Components/Reklama";
import Tovar from "./Components/Tovar";
import Shivaki from "./Components/Shivaki";
import Online from "./Components/Online";
import Navbarr from "./Components/Navbarr"
import Footer from "./Components/Footer";

 const App = () => {
    return (
        <BrowserRouter>
            <Navbarr/>
            <Switch>
                <Route path="/" exact component={RegisterPages}/>
                <PrivateHomePages path="/главний" exact component={HomePages} />
                <Route path="/категории" exact component={Banner}/>
                <Route path="/партнеры" exact component={Kategoriya}/>
                <Route path="/сервисные" exact component={Reklama}/>
                <Route path="/новости" exact component={Tovar}/>
                <Route path="/hamkorlar" exact component={Shivaki}/>
                <Route path="/контакты" exact component={Online}/>
                <Route component={NotFound}/>
            </Switch>
            <Footer/>
        </BrowserRouter>
    );
};
export default App;
