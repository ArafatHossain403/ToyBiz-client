import { Link } from "react-router-dom";
import logo1 from "../../../assets/logo1.png";
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";

const Navigation = () => {
  const { user, logOut,photoURL} = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  return (
    <div className="navbar bg-base-100 h-24">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {/* <li>
              <a>Item 1</a>
            </li>
            <li tabIndex={0}>
              <a className="justify-between">
                Parent
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li> */}
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/toys">All Toys</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>

            {user ? (
              <>
                <span>{user?.displayName}
                <div className="avatar">
  <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 ml-3">
    <img src={photoURL}/>
  </div>
</div>
                </span>
                <li>
                  <Link to="/myToys">My Toys</Link>
                </li>
                <li>
                  <Link to="/addToys">Add A Toy</Link>
                </li>
                <button onClick={handleLogOut} className="btn btn-neutral ">
                  Logout
                </button>
              </>
            ) : (
              <>
                <li className="text-xl ">
                  <Link  to="/login">Login</Link>
                </li>
              </>
            )}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          <img className="h-16" src={logo1} alt="" />
        </Link>
        {/* <Link to='/' className="btn btn-ghost normal-case text-xl">ToyBiz</Link> */}
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/toys">All Toys</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>

          {user ? (
            <>
              <li>
                <Link to="/myToys">My Toys</Link>
              </li>
              <li>
                <Link to="/addToys">Add A Toy</Link>
              </li>

              <span className="mt-3 text-green-700">{user?.displayName}</span>
              <button onClick={handleLogOut} className="btn btn-neutral ml-3">
                Logout
              </button>
            </>
          ) : (
            <>
              <li className="text-xl ">
                <Link  to="/login">Login</Link>
              </li>
            </>
          )}
        </ul>
      </div>
      <div className="navbar-end">
        {/* <Link to="/login">
          <button className="btn btn-success">Login</button>
        </Link> */}
      </div>
    </div>
  );
};

export default Navigation;
