import Link from "next/link";
import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";

export default function PdfDownload({ evt }) {
  const [id, setId] = useState("");

  const downloadPDF = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${API_URL}/pdf/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: `${Cookies.get("id")}`,
        }),
      });

      const data = await response.blob();
      const blob = new Blob([data], { type: "pdf" });
      // Create an anchor element and dispatch a click event on it
      // to trigger a download
      const a = document.createElement("a");
      //  ***Need to change "output.csv" => This is a file name can be changed
      a.download = "output.pdf";
      a.href = window.URL.createObjectURL(blob);
      const clickEvt = new MouseEvent("click", {
        view: window,
        bubbles: true,
        cancelable: true,
      });
      a.dispatchEvent(clickEvt);
      a.remove();
    } catch (err) {
      alert("The applicant id is not exist");
    }
  };

  let message = `Please use the id in CSV to generate \n PDF application form`;

  return (
    <Layout>
      <form
        className="col-start-2 col-span-4 align-center-with-div"
        onSubmit={downloadPDF}
      >
        <br />
        <br />
        <br />
        <h1>download page</h1>
        <label htmlFor="id">ID Applicants</label>
        <br />
        <input
          className="align-center-with-div"
          type="number"
          min="1"
          id="id"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <br />
        <br />

        {/* <div className="staatlichesFontCSS">
          Please use the id in CSV to generate <br /> PDF application form
        </div> */}
        <div className="new-line staatlichesFontCSS">{message}</div>
        <br />
        <br />
        <button className="submit-btn staatlichesFontCSS" type="submit">
          DOWNLOAD
        </button>
      </form>
    </Layout>
  );
}
