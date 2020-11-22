import React, { useState, useEffect } from "react";
import Business from "./Business";
import Filter from "./Filter";
import yelp from "../functions/yelp";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    yelp("", setData);
  }, []);

  return (
    <div style={{ marginTop: 80, display: "flex", flexDirection: "row" }}>
      <Filter />
      <div style={{ display: "flex", flexDirection: "column" }}>
        {data.map((business) => (
          <Business business={business} />
        ))}
      </div>
    </div>
  );
};

export default Home;
