
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider';
import About from './Pages/About/About';
import Footer from './Pages/Footer/Footer';
import Home from './Pages/Home/Home/Home';
import Spacialist from './Pages/Home/Services/Service/Spacialist/Spacialist';
import Spacialists from './Pages/Home/Services/Service/Spacialists/Spacialists';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Moreservice from './Pages/Moreservice/Moreservice/Moreservice';
import Notfound from './Pages/Notfound/Notfound';
import Header from './Pages/Shared/Header/Header';


function App() {
  return (
    <div className="App">
     <AuthProvider>
     <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/about">
            <About></About>
          </PrivateRoute>
          <PrivateRoute path="/spacialists">
            <Spacialists></Spacialists>
          </PrivateRoute>
          
          <Route path="/footer">
            <Footer></Footer>
          </Route>
          <PrivateRoute path="/moreservice/:serviceId">
            <Moreservice></Moreservice>
          
          </PrivateRoute>
          
          <Route path="*">
            <Notfound></Notfound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
     </AuthProvider>
      
    </div>
  );
}

export default App;
