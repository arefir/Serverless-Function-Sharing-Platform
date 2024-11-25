import React, {useState} from "react";
import "./Pagination.css";

function Pagination() {
  const [activePage, setActivePage] = useState(1); // Set initial active page to 1

  const pages = [1, 2, 3, 4, 5, 6];

  const handleNext = () => {
    if (activePage < pages.length) {
      setActivePage(activePage + 1); // Move to the next page
    }
  };

  const handlePrevious = () => {
    if (activePage > 1) {
      setActivePage(activePage - 1); // Move to the previous page
    }
  };

  return (
    <div className="pagination">
      <button className="paginationButton" onClick={handlePrevious}>Previous</button>
      <div className="pageNumbers">
        {pages.map((page) => (
          <span
            key={page}
            className={activePage === page ? "activePage" : "inactivePages"}
            onClick={() => setActivePage(page)}
          >
            {page}{" "}
          </span>
        ))}
      </div>
      <button className="paginationButton" onClick={handleNext}>Next</button>
    </div>
  );
}

export default Pagination;
