import React from "react";
import "./ListItem.css";

function ListItem({ titleSearch, icon, views, downloads }) {
  return (
    <li className="listItem">
      <span className="title-list-search">{titleSearch}</span>
      <div className="stats">
        <img src={icon} alt="" className="itemIcon" />
        <div className="statItem">
          <span className="statNumber">{views}</span>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/3e09a0582ece54222971e4bcd40fda0f78b553301088fdd80523f19ac5503c27?placeholderIfAbsent=true&apiKey=c88477001710423a80b4a3ad8ecfeb73" alt="" className="statIcon" />
        </div>
        <div className="statItem">
          <span className="statNumber">{downloads}</span>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/e56c53400852e83e9200fdfe670f10a55eeca2338ed5a04ec1216981f00bc330?placeholderIfAbsent=true&apiKey=c88477001710423a80b4a3ad8ecfeb73" alt="" className="statIcon" />
        </div>
      </div>
    </li>
  );
}

export default ListItem;
