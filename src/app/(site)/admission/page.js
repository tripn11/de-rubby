"use client";

import { useState } from "react";
import Link from "next/link";

const Admission = () => {
  const [status, setStatus] = useState(""); // SUCCESS, ERROR, or empty

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const response = await fetch("https://formspree.io/f/xgvnvjyg", {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      setStatus("SUCCESS");
      e.target.reset(); // clear form
    } else {
      setStatus("ERROR");
    }
  };

  return (
    <div id="admission">
      <div className="banner"><h1>Register</h1></div>
      <form className="form" onSubmit={handleSubmit}>
        <h3 className="title">Registration Form Request</h3>

        <div className="flex">
          <label>
            <input required type="text" className="input" name="firstName" />
            <span>Firstname</span>
          </label>

          <label>
            <input required type="text" className="input" name="lastName" />
            <span>Lastname</span>
          </label>
        </div>

        <label>
          <input required type="email" className="input" name="email" />
          <span>Email Address</span>
        </label>

        <label>
          <input required type="tel" className="input" name="phoneNumber" />
          <span>Your Phone Number</span>
        </label>

        <label>
          Select School Type
          <select name="schoolType" required>
            <option value="">-- Select --</option>
            <option value="nursery">Nursery</option>
            <option value="primary">Primary</option>
          </select>
        </label>

        <label>
          <textarea className="input" maxLength={100} name="message"></textarea>
          <span>Your Message</span>
        </label>

        <div>
          <Link href = "/" className="submit">Back</Link>
          <button className="submit" type="submit">Submit</button>
        </div>
      </form>

      {status === "SUCCESS" && (
        <p className="success">✅ Thanks! Your form has been submitted.</p>
      )}
      {status === "ERROR" && (
        <p className="error">❌ Oops! Something went wrong. Please try again.</p>
      )}
    </div>
  );
};

export default Admission;
