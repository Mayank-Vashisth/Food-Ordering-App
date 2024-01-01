import React from "react";
import ReactDOM from "react-dom/client";
// import resList from "./Data";
const resList = require("./Data.js");
const resList2 = require("./Data2.js");
// console.log(resList[0]);


// const elemnt = <h1>Hello from JSX</h1>;

const Header = () => {
  return (
    <div className="Header">
      <div className="logo-container">
        <a href="">
        <img
          className="logo"
          src="https://cdn.dribbble.com/users/630677/screenshots/3833541/media/b60f3158658e7f9c77a97056c8e4a148.jpg"
        />
        </a>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <a target="_blank" href="https://www.zomato.com/ncr">
              Home
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.zomato.com/who-we-are">
              About Us
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.zomato.com/contact">
              Conatct Us
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.zomato.com/policies/terms-of-service/"
            >
              Cart
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

// const stylecard = {
//     backgroundColor : "#c3e2d0" we can write like this also
// }

const RestaurantCard = (props) => {
    const {resData} = props;
    console.log(props)
  return (
    <div
      className="res-card"
      style={{
        backgroundColor: "#c3e2d0",
      }}
    >
      <img className="resimg" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"  + resData.info.cloudinaryImageId }alt="" />
      <h3 className="carddata2">{resData.info.name}</h3>
      <h4 className="carddata2">{resData.info.cuisines.join(", ")}</h4>
      <h4 className="carddata">{resData.info.avgRating}</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <form>
          <h1>Search for Food</h1>
          <input type="text" className="search-input" placeholder="Food..." />
          <button className="search-button">Search</button>
        </form>
      </div>
      <div className="res-container">
    
        {/* {
          resList.map(restaurant => <RestaurantCard resData={restaurant}/>)
        } */}
        {
          resList2.map(restaurant => <RestaurantCard key={restaurant.info.id} resData={restaurant}/>)
        }

      </div>
    </div>
  );
};

const Applayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(elemnt);
root.render(<Applayout />);
