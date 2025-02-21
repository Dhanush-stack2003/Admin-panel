import {useState} from 'react'
import '../Sidebar/Sidebar.css'
import { MdDashboard } from "react-icons/md";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { IoIosStats } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { SiGoogleforms } from "react-icons/si";
import { FaShoppingCart } from "react-icons/fa";
import { IoIosPaper } from "react-icons/io";
import { MdLocalShipping } from "react-icons/md";
import { IoLogOut } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { FaCheckSquare } from "react-icons/fa";
import {IconContext} from 'react-icons';
function Sidebar() {
  const [active,setActive] = useState(null);

  const toggleButton = (index) => {
    setActive(index)
  }

  return (
    <IconContext.Provider value={{ size:'20px'}}>
      <div className="sidebar">
        <div className="top">
          <span className="title">Payroll</span>
        </div>
        <hr />
        <div className="center">
          <ul>
            <div className="list_container">
              <p className="Sub_heading">Employeee Management</p>
              <li className={active === 0 ? "active" : ""}>
                <MdDashboard className='icon'/>
                <span onClick={() => toggleButton(0)}>Dashboard</span>
              </li>
              <li className={active === 1 ? "active" : ""}>
                <FaUser className='icon'/>
                <span onClick={() => toggleButton(1)}>Employees</span>
              </li>
            </div>

            <div className="list_container">
              <p className="Sub_heading">Payroll operations</p>
              <li className={active === 2 ? "active" : ""}>
                <IoIosPaper />
                <span onClick={() => toggleButton(2)}>Pay Runs</span>
              </li>
              <li className={active === 3 ? "active" : ""}>
                <FaCheckSquare />
                <span onClick={() => toggleButton(3)}>Approvals</span>
              </li>
              <li className={active === 4 ? "active" : ""}>
                <IoIosStats />
                <span onClick={() => toggleButton(4)}>Reports</span>
              </li>
            </div>

            <div className="list_container">
              <p className="Sub_heading">Settings</p>
              <li className={active === 5 ? "active" : ""}>
                <SiGoogleforms />
                <span onClick={() => toggleButton(5)}>Form 16</span>
              </li>
              <li className={active === 6 ? "active" : ""}>
                <FaIndianRupeeSign />
                <span onClick={() => toggleButton(6)}>Loans</span>
              </li>
              <li className={active === 7 ? "active" : ""}>
                <FaShoppingCart />
                <span onClick={() => toggleButton(7)}>Orders</span>
              </li>
              <li className={active === 8 ? "active" : ""}>
                <MdLocalShipping />
                <span onClick={() => toggleButton(8)}>Delivery</span>
              </li>
            </div>

            <div className="list_container">
              <p className="Sub_heading">User</p>
              <li className={active === 9 ? "active" : ""}>
                <FaUserCircle />
                <span onClick={() => toggleButton(9)}>Profile</span>
              </li>
              <li className={active === 10 ? "active" : ""}>
                <IoLogOut />
                <span onClick={() => toggleButton(10)}>Log Out</span>
              </li>
            </div>
          </ul>
        </div>
        <hr />
        <div className="bottom">
          <div className="mode_toggle">
            <div className="toggle_normal"></div>
            <div className="toggle_dark"></div>
          </div>
          <span>Contact Support</span>
        </div>
      </div>
    </IconContext.Provider>
  );
}

export default Sidebar