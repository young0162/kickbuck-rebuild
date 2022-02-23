import React, { useEffect, useState } from "react";
import "../assets/scss/Home.scss";

function Home() {
  const [itemCount, setItemCount] = useState(20);
  const [itemArray, setItemArray] = useState([0]);

  useEffect(() => {
    for (let i = 1; i < itemCount; i++) {
      setItemArray((itemArray) => [...itemArray, i]);
      console.log("i", i);
    }
  }, []);

  return (
    <div>
      <div className="img__wrap">
        {itemArray.map((data, index) => {
          <p key={index}>{data}</p>;
        })}
        <div className="img__wrap-item">
          <img src={require("../assets/img/main-item1.jpg")} alt="img01" />
        </div>
        <div className="img__wrap-item">
          <img src={require("../assets/img/main-item2.jpg")} alt="img01" />
        </div>
        <div className="img__wrap-item">
          <img src={require("../assets/img/main-item3.jpg")} alt="img01" />
        </div>
        <div className="img__wrap-item">
          <img src={require("../assets/img/main-item4.jpg")} alt="img01" />
        </div>
        <div className="img__wrap-item">
          <img src={require("../assets/img/main-item5.jpg")} alt="img01" />
        </div>
      </div>
    </div>
  );
}

export default Home;
