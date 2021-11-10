import { Route, useNavigate } from "react-router";
import { Link, NavLink } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  const move = () => {
    let obj = {
      name: "Ali",
      age: 18,
    };
    navigate("/about", { state: obj });
  };

  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink
              className={(routeStatus) => {
                if (routeStatus.isActive == true) {
                  return "active";
                }
              }}
              to="/"
            >
              Home
            </NavLink>
            {/* Navlink is used only for styling the active route */}
            
          </li>
          <li><Link className={(routeStatus) => {
                if (routeStatus.isActive == true) {
                  return "active";
                }
              }}
              to="/"
            >
              Home
              
            </Link></li>
          <li>
            <NavLink to="/about">about</NavLink>
          </li>
        </ul>
      </nav>
      <h1>Home</h1>

      <button onClick={move}>Go to About</button>
    </>
  );
}
export default Home;