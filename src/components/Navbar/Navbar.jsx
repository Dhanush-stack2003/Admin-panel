import '../Navbar/Navbar.css'
import { IoMdSearch } from "react-icons/io";
import { MdLanguage } from "react-icons/md";
import { MdNotificationsNone } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { MdDarkMode } from "react-icons/md";
import { IconContext } from 'react-icons';
import user_logo from '../../Asserts/user_logo.jpg'

function Navbar() {
  return (
    <IconContext.Provider value={{color:'#888',size:'30px'}}>
      <div className="navbar">
        <div className="wrapper">
          <div className="search">
            <input type="search" placeholder="Search Employee" />
            <div className="vl"></div>
            <IoMdSearch />
          </div>
          <div className="items">
            <div className="item">
              <div className="vl"></div>
             
              <p style={{display:'flex', alignItems:'center'}}> <MdLanguage />Eng</p>
            </div>
            <div className="item">
              <MdDarkMode />
            </div>
            <div className="item">
              <MdNotificationsNone />
              <div className="counter">3</div>
            </div>
            <div className="item">
              <IoSettingsOutline />
            </div>
            <div className="item">
              <img src={user_logo} alt="" className="icon" />
            </div>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}

export default Navbar