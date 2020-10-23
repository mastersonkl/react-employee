import React from 'react';
import Navbar from "./components/navbar"
import Main from "./pages/main"
import Wrapper from "./components/wrapper"



function App() {
  return (
  
      <div>
        <Navbar />
        <Wrapper>
          <Main />
        </Wrapper>
      </div>
  

  );
}

export default App;
