import React from "react";
import Article from './Article'
import Header from './Header'

function App() {
  return <div className="App">
    learn react!
    <Header burrito={blogData.name}/> 
    <Article />
  </div>;
}

export default App;
