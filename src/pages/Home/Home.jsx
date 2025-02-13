import "../Home/home.css"
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from "../../components/Navbar/Navbar";

function Home() {
  return (
    <div className="home">
      <Sidebar />
      <div className="home_container">
        <Navbar/>
      </div>
    </div>
  );
}

export default Home