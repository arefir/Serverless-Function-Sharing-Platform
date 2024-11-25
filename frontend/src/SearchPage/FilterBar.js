import React, {useState, useRef, useEffect} from "react";
import "./FilterBar.css";

function FilterBar() {
  const filterOptions = ["Latest", "Top Rated", "Most Viewed", "Most Downloaded"];
  const categoryOptions = ["01", "02", "03", "04"];
  const [activeOption, setActiveOption] = useState("Most Downloaded");
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Select Category");

  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleCategorySelect = (category) => {
    setActiveCategory(category);
    setDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="filterBar">
      <div className="filterOptions">
        {filterOptions.map((option, index) => (
          <button 
            key={index} 
            className={`filterButton ${activeOption === option ? 'active' : ''}`}
            onClick={() => setActiveOption(option)}>
            {option}
          </button>
        ))}
      </div>
      <div className="categorySelector" onClick={toggleDropdown} ref={dropdownRef}>
        <span>{activeCategory}</span>
        <span className="arrowIcon"></span>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/3c1338d0045e2bbd6d8fe03911da3e29e01ea8411018768f71bbe05ac0db2796?placeholderIfAbsent=true&apiKey=c88477001710423a80b4a3ad8ecfeb73" alt="" className="filterIcon" />
        {isDropdownOpen&& (
          <div className="dropdownMenu">
            {categoryOptions.map((category, index) => (
              <div
              key={index}
              className="dropdownItem"
              onClick={() => handleCategorySelect(category)}
            >
              {category}
              </div>
            ))}
            </div>
        )}
      </div>
    </div>
  );
}

export default FilterBar;
