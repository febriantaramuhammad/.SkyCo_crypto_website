import React, { useState, useEffect } from "react";
import { FiArrowUpRight, FiArrowDown } from "react-icons/fi";
import "./Featured.css";
import axios from "axios";
import CoinCard from "./CoinCard";

const Featured = () => {
  const [data, setData] = useState(null);

  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=idr&order=market_cap_desc&per_page=6&page=1&sparkline=false";

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //   console.log(data);

  if (!data) {
    return null;
  }

  return (
    <div className="featured">
      <div className="container">
        {/* left */}
        <div className="left">
          <h2 className="four">
            Explore Top Crypto's Like Bitcoin, Ethereum, And Dogecoin
          </h2>
          <p className="third">
            See All Available Assets: Cryptocurrencies And NFT's
          </p>
          <button className="btn">See More Coins</button>
        </div>
        {/* left end */}

        {/* right */}
        <div className="right">
          {data.map((data) => (
            <CoinCard key={data.id} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Featured;
