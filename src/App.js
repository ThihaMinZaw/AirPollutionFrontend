import 'bootstrap/dist/css/bootstrap.min.css';


import './App.scss';

import NavbarReact from './components/Navbar'

import SlideShow from './components/SlideShow'

import Footer from './components/Footer'


function App() {
  return (
   <div className="App">
     <NavbarReact />
     
     <SlideShow />
     

    <Footer />

   </div>

 
  );
}

export default App;
