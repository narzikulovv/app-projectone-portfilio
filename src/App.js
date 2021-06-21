import './sass/sardor.scss'
import './sass/baxtiyor.scss';
import {BrowserRouter, Switch, Route} from "react-router-dom";



import HomePages from "./pages/HomePages";
 const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={HomePages}/>
            </Switch>

        </BrowserRouter>
    );
};

export default App;
