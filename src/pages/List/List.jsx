import React, { useState } from 'react'
import '../List/List.css'
import Navbar from '../../components/Navbar/Navbar.jsx'
import Sidebar from '../../components/Sidebar/Sidebar.jsx'
import DataTable from '../../components/DataTable/DataTable'
import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineDotsCircleHorizontal } from "react-icons/hi";
import { CiFilter } from "react-icons/ci";
import { IoGitBranchOutline } from "react-icons/io5";
import { GoTriangleDown } from "react-icons/go";
import { LuContact } from "react-icons/lu";
import { CiCircleRemove } from "react-icons/ci";

function List() {
const [filterClicked,setFilterclicked] = useState(false)

const toggle = () => {
  setFilterclicked(!filterClicked)
}

  return (
    <div className="list">
      <Sidebar />
      <div className="list_container">
        <Navbar />
        <div>
          <div className="employee_section">
            <div>
              <p className="active_employee">Active Employees</p>
              <GoTriangleDown
                style={{ height: "30px", width: "30px", marginLeft: "5px" }}
              />
            </div>
            <div className="add_employee">
              <p>Add Employee</p>
              <span className="employee_more_info">...</span>
              <CiFilter className="filter_icon" onClick={() => toggle()} />
            </div>
          </div>
          {filterClicked && (
            <div
              className={
                filterClicked
                  ? "filter_active filter_employee"
                  : "filter_employee"
              }
            >
              <span>FILTER BY:</span>
              <div className="filter_options">
                <div className="filter_option">
                  <IoLocationOutline />
                  <span>Select Work Location</span>
                  <GoTriangleDown className="triangle" />
                </div>
                <div className="filter_option">
                  <IoGitBranchOutline />
                  <span>Select Department</span>
                  <GoTriangleDown className="triangle" />
                </div>
                <div className="filter_option">
                  <LuContact />
                  <span>Select Designation</span>
                  <GoTriangleDown className="triangle" />
                </div>
              </div>
              <div className="more_filter">
                <HiOutlineDotsCircleHorizontal className="more_filter_dots" />
                <span>More Filters</span>
                <GoTriangleDown className="triangle" />
                </div>
                <div>
                <span onClick={() => setFilterclicked(false)}>
                  <CiCircleRemove className="cancel_filter" />
                </span>
              </div>
              </div>
          )}
        </div>
        <DataTable />
      </div>
    </div>
  );
}

export default List