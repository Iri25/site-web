import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import useUser from "./useUser";

export default function NavBar() {
  const { isLoading, user } = useUser();

  const navigate = useNavigate();

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/articles">Articles</Link>
        </li>
        {isLoading ? (
          <li>Loading...</li>
        ) : (
          <>
            <li>
              {user ? (
                <button onClick={() => signOut(getAuth())}>Sign Out</button>
              ) : (
                <button onClick={() => navigate("/login")}>Sign In</button>
              )}
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
