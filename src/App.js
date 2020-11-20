import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

import './App.scss';

import NavbarReact from './components/Navbar'

import SlideShow from './components/SlideShow'

import Predictions from './components/Predictions'

import References from './components/References'

import Analysis from './components/Analysis'

import Footer from './components/Footer'




function App() {
  return (
   <div className="App">
     <NavbarReact />

     <Router>

   
     <Switch>
        <Route exact path="/analysis" component={Analysis} />
        <Route exact path="/predictions" component={Predictions} />
        <Route exact path="/references" component={References} />
       <Route exact path="/home" component={SlideShow} />
       <Route path="/" component={SlideShow} />
       
     
    

   
     </Switch>
     </Router>
     

    <Footer />

   </div>

 
  );
}

export default App;
