import React, { useState } from "react";
import RegistrationForm from "./Registration";
import LoginForm from "./LoginForm";
import Company from "./Company"; // ✅ use Company.js instead of construction.js

function App() {
  const [page, setPage] = useState("registration"); // start with Registration
  const [user, setUser] = useState(null);

  return (
    <div>
      {/* ✅ Registration Page */}
      {page === "registration" && (
        <RegistrationForm
          onSuccess={() => setPage("login")}
          goToLogin={() => setPage("login")}
        />
      )}

      {/* ✅ Login Page */}
      {page === "login" && (
        <LoginForm
          onSuccess={(formData) => {
            setUser(formData);
            setPage("company"); // ✅ go to Company page
          }}
          goToRegister={() => setPage("registration")}
        />
      )}

      {/* ✅ Company Website Page */}
      {page === "company" && (
        <Company
          user={user}
          onLogout={() => {
            setUser(null);
            setPage("login");
          }}
        />
      )}
    </div>
  );
}

export default App;

