import { useEffect, useState } from "react";
import "../DataTable/DataTable.css";
import User_data from "../../Userdata.js";
import user_profile from "../../Asserts/user.png";

function DataTable() {
  const [checkedAll, setCheckedAll] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    setData([...User_data]);
  }, []);

  console.log(data);

  const deleteUser = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const selectHandler = (event) => {
    let isChecked = event.target.checked;
    let parsedInt = parseInt(event.target.value);
    if (isChecked) {
      setCheckedAll([...checkedAll, parsedInt]);
    } else {
      setCheckedAll(
        checkedAll.filter((prevdata) => {
          return prevdata !== parsedInt;
        })
      );
    }
  };

  const toggle = () => {
    if (checkedAll.length === User_data.length) {
      setCheckedAll([]);
    } else {
      const checkedata = User_data.map((item) => {
        return item.id;
      });
      setCheckedAll(checkedata);
    }
  };

  return (
    <main className="table">
      <section className="table_body">
        <table>
          <thead>
            <tr>
              <th>
                <input type="checkbox" onClick={() => toggle()} />
              </th>
              <th>Id</th>
              <th>Employee name </th>
              <th>Working Email</th>
              <th>Status</th>
              <th>Department</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              return (
                <tr
                  key={index}
                >
                  <td key={item.id}>
                    <input
                      type="checkbox"
                      value={item.id}
                      onChange={selectHandler}
                      checked={checkedAll.includes(item.id)}                      
                    />
                  </td>
                  <td >{item.id}</td>
                  <td >
                    <img src={user_profile} alt="avatar" />
                    {item.username}
                  </td>
                  <td >{item.email}</td>
                  <td
                    className={
                      item.status === "Active" ? "user_active" :"user_inactive"
                    }
                  >
                    {item.status}
                  </td>
                  <td >{item.department}</td>
                  <td>
                    <span
                      className="delete_button"
                      onClick={() => deleteUser(item.id)}
                    >
                      Delete
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </main>
  );
}

export default DataTable;
