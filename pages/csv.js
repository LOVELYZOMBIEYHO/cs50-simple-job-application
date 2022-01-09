import React, { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import { API_URL } from "../config";
import Cookies from "js-cookie";
import Link from "next/link";
export default function CSVdownload() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    if (
      Cookies.get("id") != null &&
      Cookies.get("id") != "undefined" &&
      Cookies.get("id") == "1"
    )
      setMounted(true);
  }, []);
  const downloadCSV = async (e) => {
    // Prevent Form submit, the form will refresh too fast and can't be sent the data to backend database if no prevent default
    e.preventDefault();
    const response = await fetch(`${API_URL}/download`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: `${Cookies.get("id")}`,
      }),
    });
    const data = await response.blob();

    // Create a blob with the data we want to download as a file
    //  ***Need to change {type: "jpg/mp3/csv or other"}
    const blob = new Blob([data], { type: "csv" });
    // Create an anchor element and dispatch a click event on it
    // to trigger a download
    const a = document.createElement("a");
    //  ***Need to change "output.csv" => This is a file name can be changed
    a.download = "output.csv";
    a.href = window.URL.createObjectURL(blob);
    const clickEvt = new MouseEvent("click", {
      view: window,
      bubbles: true,
      cancelable: true,
    });
    a.dispatchEvent(clickEvt);
    a.remove();
  };

  return (
    <Layout>
      <div className="grid grid-cols-6 gap-4">
        <div className="col-start-2 col-span-4 align-center-with-div">
          {mounted ? (
            <div>
              <h1>You can download CSV report here</h1>
              <button
                className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded "
                onClick={downloadCSV}
              >
                Download report (CSV)
              </button>
            </div>
          ) : (
            <div>
              Unauthorized , Please login again{" "}
              <Link href="/login">
                <a className="">Login</a>
              </Link>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
