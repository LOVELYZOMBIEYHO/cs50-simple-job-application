import { useState, useEffect, useContext } from "react";
import { API_URL } from "/config/index";
import { FRONT_URL } from "/config/index";
import Layout from "@/components/Layout";

import Cookies from "js-cookie";

export default function Login({}) {
  // Define admin login useState
  const [adminName, setAdminName] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    if (
      Cookies.get("id") != null &&
      Cookies.get("id") != "undefined" &&
      Cookies.get("id") == "1"
    )
      setMounted(true);
  }, []);

  // API post request
  const submitApplication = async (e) => {
    // Prevent Form submit, the form will refresh too fast and can't be sent the data to backend database if no prevent default
    e.preventDefault();
    const response = await fetch(`${API_URL}/login`, {
      method: "POST",
      body: JSON.stringify({
        adminName,
        adminPassword,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();

    Cookies.set("id", data.id);
    // Redirect original page
    window.location.replace(`${FRONT_URL}/login`);
  };

  // Clean cookies
  const clear_cookies = () => {
    Cookies.remove("id");
    setTimeout(function () {
      window.location.replace(`${FRONT_URL}/login`);
    }, 500);
  };
  return (
    <Layout>
      {/* IF cookies have somthing and not equal "undefined", show login success */}
      {mounted ? (
        <div className="align-center-with-div">
          <h1>Login Success</h1>
          <button
            className="bg-green-100 hover:bg-green-400 text-gray font-bold py-2 px-4 border-b-4 border-green-300 hover:border-green-700 rounded"
            onClick={clear_cookies}
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-6 gap-4">
          <form
            className="col-start-2 col-span-4 align-center-with-div"
            onSubmit={submitApplication}
          >
            <h1>Login</h1>
            <br />

            <div>
              <label htmlFor="adminName">Admin Name</label>
              <br />
              <input
                type="text"
                id="adminName"
                value={adminName}
                onChange={(e) => setAdminName(e.target.value)}
              />
              <br />
              <label htmlFor="adminPassword">Admin Password</label>
              <br />
              <input
                type="password"
                id="adminPassword"
                autoComplete="on"
                value={adminPassword}
                onChange={(e) => setAdminPassword(e.target.value)}
              />
              <br />
            </div>
            <br />
            <button className="submit-btn" type="submit">
              submit
            </button>
            <br />
            <br />
            <br />
            <div> *Admin Name:admin</div>
            <div> *Admin Password:admin</div>
          </form>
        </div>
      )}
    </Layout>
  );
}
