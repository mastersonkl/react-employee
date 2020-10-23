import React from 'react';
import { BrowserRouter as Router } from "react-router-dom"
import Navbar from "./components/navbar"
// import Searchbar from './components/searchbar'
import Main from "./pages/main"
import Wrapper from "./components/wrapper"
// import Table from "./components/table"


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Main />
        </Wrapper>
      </div>
    </Router>

  );
}

export default App;
