import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { logoutUser } from "../features/user/userSlice";

const links = [
  { id: 1, url: "/login", text: "login" },
  { id: 2, url: "/register", text: "create account" },
];

const NavPersonLinks = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.userState.user);

  const handleLogout = () => {
    //clearing cookies
    // document.cookie =
    //   "myToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    navigate("/");
    dispatch(logoutUser());
  };

  return (
    <>
      {user ? (
        <div className="flex-col justify-center text-center place-items-center">
          <p className="text-sm md:text-xl">
            Welcome to MLB <br></br> {user.name}
          </p>
          <button
            onClick={handleLogout}
            className="btn btn-primary bg-cyan-600 hover:bg-gray-800 btn-sm md:btn-sm text-white mt-2"
          >
            Logout
          </button>
        </div>
      ) : (
        <ul className="grid gap-2 mt-4 text-center">
          {links.map((link) => {
            const { id, url, text } = link;
            return (
              <li key={id}>
                <NavLink
                  className="capitalize text-sm md:text-sm md:w-28 btn btn-primary bg-cyan-500 hover:bg-gray-800 text-white"
                  to={url}
                >
                  {text}
                </NavLink>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default NavPersonLinks;
