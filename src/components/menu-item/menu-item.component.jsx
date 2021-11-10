import React from "react";
import { withRouter } from "react-router"; // HOC- function that takes a component as an argument and returns you a modified component

// going to use a functional component because we're not going to hold any state
import "./menu-item.styles.scss";
const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <div
    className={`${size} menu-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className="content">
      <h1 className="title"> {title.toUpperCase()}</h1>
      <span className="subtitle"> SHOP NOW</span>
    </div>
  </div>
);

export default withRouter(MenuItem);
// const MenuItem2 = MenuItem;
// export default MenuItem;
// const ShowTheLocationWithRouter = withRouter(MenuItem);
