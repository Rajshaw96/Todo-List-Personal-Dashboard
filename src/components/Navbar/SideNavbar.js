import profilePicture from "../../assets/profilePicture/rajkumar.jpg";
import { Link } from "react-router-dom";

const SideNavbar = () => {
  return (
    <nav className="navbar show navbar-vertical h-lg-screen navbar-expand-lg px-0 py-3 navbar-light bg-white border-bottom border-bottom-lg-0 border-end-lg" id="navbarVertical">
      <div className="container-fluid">
        <button className="navbar-toggler ms-n2" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarCollapse" aria-controls="sidebarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand py-lg-2 mb-lg-5 px-lg-6 me-0" href="#">
          <img src="https://brightspot.brightspotcdn.com/11/94/505fa8b749c7814cbc94b73fc27a/brightspot-logo-200px.svg" alt="..." />
        </a>
        <div className="navbar-user d-lg-none">
          <div className="dropdown">
            <a href="#" id="sidebarAvatar" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <div className="avatar-parent-child">
                <Link className="dropdown-item" to="/myAccount"><img alt="Image Placeholder" src={profilePicture} className="avatar avatar- rounded-circle" /></Link>
                <span className="avatar-child avatar-badge bg-success"></span>
              </div>
            </a>
          </div>
        </div>

        <div className="collapse navbar-collapse" id="sidebarCollapse">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/"><i className="bi bi-house"></i> Dashboard</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/toDoList"><i className="bi bi-list-task"></i> To-Do List</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/"><i className="bi bi-brightness-alt-high"></i> Weather</Link>
            </li>
          </ul>

          <div className="mt-auto"></div>
          <hr className="navbar-divider" />
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/myAccount"><i className="bi bi-person-square"></i> My Account</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="bi bi-box-arrow-left"></i> Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default SideNavbar;