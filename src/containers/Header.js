// function Header() {
//   return (
//     <div className="ui fixed menu">
//       <div className="ui container center">
//         <h2>Len-Mart</h2>
//       </div>
//     </div>
//   );
// }
// export default Header;
import { Link } from "react-router-dom";

let Header = () => {
  // arrow function is es6 concept we use arrow function in react components to avoid confusion among developers.arrow function is mostly used in the react components
  let menus = ["HOME1", "TRANING", "CLIENT", "BLOG", "ABOUT"];

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark mb-5 ">
      <div className="container-fluid">
        <img
          src="https://www.10000coders.co/assets/10000coders-logo.png?v=1.0"
          alt="logo"
          className="bg-white m-3 "
          width="10%"
        />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li className="nav-item">
              {/* <a className="nav-link active text-danger m-3 active" aria-current="page" href="#">
                        {menus[0]}
                        </a> */}
              <Link
                to="/"
                className="nav-link active text-danger m-3 active"
                aria-current="page"
              >
                {menus[0]}
              </Link>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-white m-3"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {menus[1]}
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  {/* <a className="dropdown-item" href="web_development.html">Web devlopment</a> */}
                  <Link to="/web-development" className="dropdown-item">
                    Web development
                  </Link>
                </li>
                <li>
                  {/* <a className="dropdown-item" href="cloud_compute.html">Cloud computing</a> */}
                  <Link to="/cloud" className="dropdown-item">
                    Cloud computing
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  {/* <a className="dropdown-item" href="mobile_development.html">Moblie Application</a> */}
                  <Link to="/mobile-development" className="dropdown-item">
                    Moblie Application
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              {/* <a className="nav-link text-white m-3" href="client.html">{menus[2]}</a> */}
              <Link to="/client" className="nav-link text-white m-3">
                {menus[2]}
              </Link>
            </li>
            <li className="nav-item">
              {/* <a className="nav-link text-white m-3" href="blog.html">{menus[3]}</a> */}
              <Link to="/blog" className="nav-link text-white m-3">
                {menus[3]}
              </Link>
            </li>
            <li className="nav-item">
              {/* <a className="nav-link text-white m-3" href="about.html">{menus[4]}</a> */}
              <Link to="/about" className="nav-link text-white m-3">
                {menus[4]}
              </Link>
            </li>
          </ul>

          <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex">
            <li className="nav-item">
              <a
                className="nav-link active bg-dark"
                aria-current="page"
                href="#loginform"
              >
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-toggle="modal"
                  data-bs-target="#myModal"
                >
                  Log in
                </button>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#exampleModal">
                <button
                  type="button"
                  className="btn btn-danger"
                  data-bs-toggle="modal"
                  data-bs-target="#myModal1"
                >
                  Register
                </button>
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#exampleModal">
                <button
                  type="button"
                  className="btn btn-danger"
                  data-bs-toggle="modal"
                  data-bs-target="#myModal1"
                >
                  Cart 1
                </button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );

  // return (
  //   <>
  //     <p class="text-primary">This text is important.</p>
  //   </>
  // );
};
export default Header;
