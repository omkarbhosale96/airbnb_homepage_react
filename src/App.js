
import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Card from "./components/Card";
import data from "./data.json";

function App() {
  const finalObj=data.map(obj=>
    {return (<Card 
      key={obj.id} 
      img={obj.img} 
      city={obj.location.city} 
      state={obj.location.state}
      rating={obj.rating} 
      distance={obj.distance} 
      price={obj.price}
    />)}
    )
  return (
    <div>
      <Header />
      <Main />
      <div className="card-container">
        {finalObj}
      </div>
    </div>
  );
}

export default App;
