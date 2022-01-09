import Link from "next/link";
import { useState, useEffect, useContext } from "react";
import { API_URL } from "/config/index";
import { FRONT_URL } from "/config/index";
import Layout from "@/components/Layout";
import { Container, Row, Col } from "react-bootstrap";
export default function Jobapply({}) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [idNo, setIdno] = useState("");
  const [applied_position, setAppliedPosition] = useState("");
  const [expected_salary, setExpected_Salary] = useState("");
  const [date_availability, setDateAvailability] = useState("");
  const [full_or_part_time, setFullPartTime] = useState("Full");
  const [sex, setSex] = useState("Male");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  // Need to add ID to avoid error: Each child in a list should have a unique "key" prop.
  const sexOptions = [
    {
      label: "Male",
      id: "1",
      value: "Male",
    },

    {
      label: "Female",
      id: "2",
      value: "Female",
    },
  ];
  const fullPartOptions = [
    {
      label: "Full",
      id: "1",
      value: "Full",
    },

    {
      label: "Part",
      id: "2",
      value: "Part",
    },
  ];
  // API post request
  const submitApplication = async (e) => {
    // Prevent Form submit, the form will refresh too fast and can't be sent the data to backend database if no prevent default
    e.preventDefault();
    const response = await fetch(`${API_URL}/jobapply`, {
      method: "POST",
      body: JSON.stringify({
        firstName,
        lastName,
        idNo,
        applied_position,
        expected_salary,
        date_availability,
        full_or_part_time,
        sex,
        address,
        phone,
        email,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();

    // set 500ms redirect original page, To confirm data sd to backend
    setTimeout(function () {
      window.location.replace(`${FRONT_URL}/jobapply`);
    }, 500);
  };
  return (
    <Layout>
      <div className="grid grid-cols-6 gap-4">
        <form
          className="col-start-2 col-span-4 align-center-with-div"
          onSubmit={submitApplication}
        >
          <br />
          <h1>Job Application</h1>
          <br />

          <div>
            <label htmlFor="First Name">First Name</label>
            <br />
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <br />
            <label htmlFor="Last Name">Last Name</label>
            <br />
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <br />
            <label htmlFor="idNo">Your Id</label>
            <br />
            <input
              type="text"
              id="idNo"
              value={idNo}
              onChange={(e) => setIdno(e.target.value)}
            />
            <br />
            <label htmlFor="applied_position">Position Apply</label>
            <br />
            <input
              type="text"
              id="applied_position"
              value={applied_position}
              onChange={(e) => setAppliedPosition(e.target.value)}
            />
            <br />
            <label htmlFor="expected_salary">expected_salary</label>
            <br />
            <input
              type="number"
              id="expected_salary"
              value={expected_salary}
              onChange={(e) => setExpected_Salary(e.target.value)}
            />
            <br />
            <label htmlFor="date_availabilit">date_availabilit</label>
            <br />
            <input
              type="date"
              id="date_availability"
              value={date_availability}
              onChange={(e) => setDateAvailability(e.target.value)}
            />
            <br />
            <label htmlFor="full_or_part_time">full_or_part_time</label>
            <br />
            {/* <input
              type="text"
              id="full_or_part_time"
              value={full_or_part_time}
              onChange={(e) => setFullPartTime(e.target.value)}
            /> */}
            <select
              className="align-center-with-div staatlichesFontCSS"
              value={full_or_part_time}
              onChange={(e) => setFullPartTime(e.target.value)}
            >
              {fullPartOptions.map((option) => (
                <option key={option.id} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <br />
            {/* <label htmlFor="sex">sex</label>
            <br />
            <input
              type="option"
              id="sex"
              value={sex}
              onChange={(e) => setSex(e.target.value)}
            /> */}
            <label htmlFor="sex">sex</label>
            <br />
            <select
              className="align-center-with-div staatlichesFontCSS"
              value={sex}
              onChange={(e) => setSex(e.target.value)}
            >
              {sexOptions.map((option) => (
                <option key={option.id} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <br />
            <label htmlFor="address">address</label>
            <br />
            <input
              type="text"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <br />
            <label htmlFor="phone">phone</label>
            <br />
            <input
              type="text"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <br />
            <label htmlFor="email">email</label>
            <br />
            <input
              type="email"
              id="sex"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <br />
          <button className="submit-btn staatlichesFontCSS" type="submit">
            submit
          </button>
        </form>
      </div>
    </Layout>
  );
}
