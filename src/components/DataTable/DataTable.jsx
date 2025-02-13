import {useState} from 'react'
import '../DataTable/DataTable.css'
import user_profile from '../../Asserts/user.png'

function DataTable() {
  const [checkedAll,setCheckedAll] = useState(false);
  const [activeRows,setActiveRow] = useState([]);

  const selectHandler = (id) => {
    const parsedInt = parseInt(id)
    setActiveRow({...activeRows,parsedInt})
  }

  console.log(activeRows)

  const toggle = () => {
    setCheckedAll(!checkedAll)
  }
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
            <tr>
              <td>
                <input type="checkbox" />
              </td>
              <td>01</td>
              <td>
                <img src={user_profile} alt="avatar" />
                vimal
              </td>
              <td>vimal@gmail.com</td>
              <td className="active_user">Active</td>
              <td>IT</td>
              <td>
                <span className="delete_button">Delete</span>
              </td>
            </tr>
            <tr>
              <td className="checked">
                <input type="checkbox" />
              </td>
              <td className="checked">02</td>
              <td className="checked">
                <img src={user_profile} alt="avatar" />
                rajesh
              </td>
              <td className="checked">rajesh@gmail.com</td>
              <td className="user_inactive checked">Inactive</td>
              <td className="checked">IT</td>
              <td className="checked">
                <span className="delete_button">Delete</span>
              </td>
            </tr>
            <tr>
              <td className="checked">
                <input type="checkbox" />
              </td>
              <td className="checked">03</td>
              <td className="checked">
                <img src={user_profile} alt="avatar" />
                ramkumar
              </td>
              <td className="checked"> ramkumar@gmail.com</td>
              <td className="user_inactive checked">Inactive</td>
              <td className="checked">Accounting</td>
              <td className="checked">
                <span className="delete_button">Delete</span>
              </td>
            </tr>
            <tr>
              <td className="checked">
                <input type="checkbox" />
              </td>
              <td className="checked">04</td>
              <td className="checked">
                <img src={user_profile} alt="avatar" />
                kumar
              </td>
              <td className="checked">kumar@gmail.com</td>
              <td className="user_inactive checked">Inactive</td>
              <td className="checked">HR</td>
              <td className="checked">
                <span className="delete_button ">Delete</span>
              </td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" />
              </td>
              <td>05</td>
              <td>
                <img src={user_profile} alt="avatar" />
                rahul
              </td>
              <td>rahul@gmail.com</td>
              <td className="active_user">Active</td>
              <td>Marketing</td>
              <td>
                <span className="delete_button">Delete</span>
              </td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" />
              </td>
              <td>06</td>
              <td>
                <img src={user_profile} alt="avatar" />
                alex
              </td>
              <td>alex@gmail.com</td>
              <td className="active_user">Active</td>
              <td>Marketing</td>
              <td>
                <span className="delete_button">Delete</span>
              </td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" />
              </td>
              <td>07</td>
              <td>
                <img src={user_profile} alt="avatar" />
                joseph
              </td>
              <td>joseph@gmail.com</td>
              <td className="active_user">Active</td>
              <td>IT</td>
              <td>
                <span className="delete_button">Delete</span>
              </td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" />
              </td>
              <td>08</td>
              <td>
                <img src={user_profile} alt="avatar" />
                raja
              </td>
              <td>raja@gmail.com</td>
              <td className="active_user">Active</td>
              <td>IT</td>
              <td>
                <span className="delete_button">Delete</span>
              </td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" />
              </td>
              <td>09</td>
              <td>
                <img src={user_profile} alt="avatar" />
                rakesh
              </td>
              <td>rakesh@gmail.com</td>
              <td className="active_user">Active</td>
              <td>IT</td>
              <td>
                <span className="delete_button">Delete</span>
              </td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" />
              </td>
              <td>10</td>
              <td>
                <img src={user_profile} alt="avatar" />
                karthik
              </td>
              <td>karthik@gmail.com</td>
              <td className="active_user">Active</td>
              <td>IT</td>
              <td>
                <span className="delete_button">Delete</span>
              </td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" />
              </td>
              <td>11</td>
              <td>
                <img src={user_profile} alt="avatar" />
                aravind
              </td>
              <td>Aravind@gmail.com</td>
              <td className="active_user">Active</td>
              <td>IT</td>
              <td>
                <span className="delete_button">Delete</span>
              </td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" />
              </td>
              <td>12</td>
              <td>
                <img src={user_profile} alt="avatar" />
                akil
              </td>
              <td>akil@gmail.com</td>
              <td className="active_user">Active</td>
              <td>IT</td>
              <td>
                <span className="delete_button">Delete</span>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  );
}

export default DataTable