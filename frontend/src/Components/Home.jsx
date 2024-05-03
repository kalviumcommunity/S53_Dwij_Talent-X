import React from "react";
import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import "./../App.css";
import background from "./../assets/home-back.png";

export default function Home() {
  return (
    <div>
      <div className="bg">
        <div className="bg-img">
          <img src={background} className="img" />
        </div>
        <div className="bg-text">The only place to get Quality Talent</div>
      </div>
      <div className="add-feature">
        <div className="add-feature-div">
          <div className="add-feature-img"></div>
        </div>
      </div>
    </div>
  );
}
