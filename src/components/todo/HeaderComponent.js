import { Link } from "react-router";
export default function HeaderComponent() {
  return (
    <header className="bg-dark shadow-sm">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                <h1 className="h5 mb-0">Time to study!</h1>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/welcome/johndoe">
                <h1 className="h5 mb-0">Home</h1>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/todos">
                <h1 className="h5 mb-0">Todos</h1>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/logout">
                <h1 className="h5 mb-0">Logout</h1>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                <h1 className="h5 mb-0">Login</h1>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
