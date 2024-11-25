import React from "react";
import FilterBar from "./FilterBar";
import ListItem from "./ListItem";
import Pagination from "./Pagination.js";
import "./ItemContent.css";

function ItemContent() {
  const listItems = Array(17).fill({
    titleSearch: "API Integration",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/1ba39965bbc7f973728d955f1388b76e167499115d11d30dafd451d52eb75de5?placeholderIfAbsent=true&apiKey=c88477001710423a80b4a3ad8ecfeb73",
    views: "3,421",
    downloads: "2,542",
  });

  return (
    <main className="itemContent">
      <FilterBar />
      <ul className="listContainer">
        {listItems.map((item, index) => (
          <ListItem key={index} {...item} />
        ))}
      </ul>
      <Pagination />
    </main>
  );
}

export default ItemContent;
