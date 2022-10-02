import React from "react";
import "../Screens/Home/Home.styles.css";
import { AdvertismentData } from "../data/Advertisment";

export const Advertisment = () => {
  const [AdsData, setAdsData] = React.useState(AdvertismentData);
  return (
    <div className="adBg">
      {AdsData.map((img, idx) => {
        if (idx <= 3) {
          return <img key={idx} className="bannerImg" src={img}></img>;
        }
      })}
    </div>
  );
};
