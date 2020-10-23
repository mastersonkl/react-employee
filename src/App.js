import { BrowserRouter as Router } from "react-router-dom"
import NavBar from "./componets/Navbar"
import SearchForm from './componets/searchbar';

function App() {
  return (
    <Router>
    <div>
      <NavBar />
      <SearchForm />
    </div>
  </Router>
    
  );
}

export default App;
