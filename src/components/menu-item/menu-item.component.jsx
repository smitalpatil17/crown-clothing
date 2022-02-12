import React from "react";
import "./menu-item.styles.scss";
import {  useNavigate } from "react-router-dom";



let navigate;
const MenuItem = ({ title, imageUrl, size, linkUrl }) => (
  (navigate = useNavigate()),
  (
    <div
      className={`${size} menu-item`}
      onClick={() => {
        navigate(`/${linkUrl}`);
        // history.push(`/${linkUrl}`);
      }}
    >
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  )
);

export default MenuItem;