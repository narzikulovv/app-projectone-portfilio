import './sass/sardor.scss'
import './sass/baxtiyor.scss';
import {BrowserRouter, Switch, Route} from "react-router-dom";



import HomePages from "./pages/HomePages";
import RegisterPages from "./pages/RegisterPages";
import PrivateHomePages from "./pages/PrivateHomePages";
import NotFound from "./pages/NotFound";

 const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={RegisterPages}/>

                <PrivateHomePages path="/home" exact component={HomePages} />
                <Route path="/home" exact component={HomePages}/>



                <Route component={NotFound}/>

            </Switch>

        </BrowserRouter>
    );
};

export default App;
