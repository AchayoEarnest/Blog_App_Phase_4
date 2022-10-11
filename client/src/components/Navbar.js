import React from "react";
import { Link } from "react-router-dom";

function NavBar({ user, setUser }) {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    <header className="nav">
      <div>
        <Link to="/" className="header-btn">Home</Link>
      </div>
      <div>
        {user ? (
          <button onClick={handleLogoutClick}>Logout</button>
        ) : (
          <>
            <Link to="/signup" className="header-btn" >Signup</Link>
            <Link to="/login" className="header-btn" >Login</Link>
          </>
        )}
      </div>
    </header>
  );
}

export default NavBar;
