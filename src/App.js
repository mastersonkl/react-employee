import { BrowserRouter as Router } from "react-router-dom"
import Navbar from "./componets/Navbar"
import Searchbar from './componets/searchbar';

function App() {
  return (
    <Router>
    <div>
      <Navbar />
      <Searchbar />
    </div>
  </Router>
    
  );
}

export default App;
