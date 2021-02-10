import Home from "./Components/HomePage/Home";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from "./Components/HomePage/Nav";
import './Resources/app.css'; 

function App() {
  return (
    <div>
      <Router>
        <Navigation/>
        <Route path="/" exact>
            <Home/>
        </Route>
      </Router>
    </div>
  );
}

export default App;
