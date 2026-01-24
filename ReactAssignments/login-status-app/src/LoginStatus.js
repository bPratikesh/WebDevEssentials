import React, { useState } from "react";

function LoginStatus() {
  // Step 1: Create state variable to manage login status
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <h2>Login Status</h2>

      {isLoggedIn && <p>You are logged in</p>}
      {!isLoggedIn && <p>You are currently logged out. Please log in.</p>}

      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
}

export default LoginStatus;
