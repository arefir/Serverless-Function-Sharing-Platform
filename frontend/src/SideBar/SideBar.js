import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './SideBar.css';

function SideBar() {
  const navigate = useNavigate(); 
  const [activeIndex, setActiveIndex] = useState(null);
  const menuItems = [
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/608188cf7f0ee3ca9b2f2f9df9876389a86aefb12a03a04c9d2829436d40bae4?placeholderIfAbsent=true&apiKey=c88477001710423a80b4a3ad8ecfeb73", label: "Home", path:"/main" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/5604e06ff7c3e995414b64085673fb49febdae29c3a7f98428aaadfd2280aeef?placeholderIfAbsent=true&apiKey=c88477001710423a80b4a3ad8ecfeb73", label: "Profile" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/744b558467bfff1c7742895aea3d482eb72f5a723b9dd7ab417704c021837820?placeholderIfAbsent=true&apiKey=c88477001710423a80b4a3ad8ecfeb73", label: "Settings" }
  ];

  return (
    <aside className="sidebar">
      <nav>
        <ul className="menu-list">
          {menuItems.map((item, index) => (
            <li 
            key={index} 
            className={`menu-item ${index===activeIndex ? 'active' : ''}`}
            onClick={() => {
              setActiveIndex(index);
              navigate(item.path);}}
            >
              <a href="#" className="menu-link">
                <img src={item.icon} alt="" className="menu-icon" />
                <span>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default SideBar;
