import React from "react";
import "./brand.css";
import { google, slack, atlassian, dropbox, shopify } from "./import";
const BrandItem = ({ src, alt }) => {
  return (
    <div>
      <img src={src} alt={alt} />
    </div>
  );
};
const Brand = () => {
  return (
    <div className="gpt3__brand section__padding">
      <BrandItem src={google} alt="google" />
      <BrandItem src={slack} alt="slack" />
      <BrandItem src={shopify} alt="shopify" />
      <BrandItem src={dropbox} alt="dropbox" />
      <BrandItem src={atlassian} alt="atlassian" />
    </div>
  );
};

export default Brand;
