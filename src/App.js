
 import './App.css';
 import {BrowserRouter as Router, Route ,Switch} from 'react-router-dom'
 import Header from './components/Header/Header'
 import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import MovieDetail from './components/MovieDetail/MovieDetail'
import PageNotFound from './components/PageNotFound/PageNotFound'


function App() {
  return (
    <div className="App">
      <Router>
      <Header></Header>
      <div className='container'>
      <Switch>
      <Route exact path="/"><Home /></Route>
      <Route path="/movie/:imdbID"><MovieDetail /></Route>
      <Route><PageNotFound/></Route>
      </Switch>
      </div>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
