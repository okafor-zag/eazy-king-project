import React, { useState } from "react";
import "./Display.css";
import "./Navigation.css";

function Display() {
  const [values, setValues] = useState({
    fullname: "",
    emailAddress: "",
    contactNumber: "",
    route: "",
    dayTime: "",
  });

  const onValue = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setValues({
      ...values,
      [e.target.name]: value,
    });
  };

  //   const isChecked = (e) => {
  //     const value = e.target.checked;
  //     if (value) {
  //       setCheck({ Time: [...check.Time, e.target.value] });
  //     } else {
  //       const index = check.Time.indexOf(e.target.value);
  //       check.Time.splice(index, 1);
  //       setCheck({ ...check.Time, [e.target.name]: value });
  //     }
  //   };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <section className="container">
      <div className="form">
        <form onSubmit={onSubmit}>
          <div>
            <div className="inpute">
              <label>Enter your full name</label>
              <input
                className="input"
                type="text"
                name="fullname"
                placeholder="Enter Your Full Name"
                value={values.fullname}
                onChange={onValue}
                required
              />
              {/* <ErrorMessage /> */}
            </div>
            <div className="inpute">
              <label>Enter Eour Email Address</label>
              <input
                className="input"
                type="email"
                name="emailAddress"
                placeholder="Enter Your Email Address"
                onChange={onValue}
                required
              />
            </div>
            <div className="inpute">
              <label>Enter Your Contact Number</label>
              <input
                className="input"
                type="phone number"
                name="contactNumber"
                placeholder="Enter Your Contact Number"
                onChange={onValue}
                required
              />
            </div>

            <div className="inpute">
              <label>Select Your Route:</label>
              <select
                className="mySelect"
                name="route"
                value={values.route}
                onChange={onValue}
                required
              >
                <option value="">
                  Route
                </option>
                <option value="Berger">Berger</option>
                <option value="mowe">Mowe</option>
                <option value="ibafo">Ibafo</option>
                <option value="cele">Cele</option>
                <option value="isolo">Isolo</option>
                <option value="jakande">Jakande</option>
                <option value="ojo">Ojo</option>
                <option value="festac">Festac</option>
                <option value="ojota">Ojota</option>
                <option value="anthony village">Anthony Village</option>
                <option value="ikorodu">Ikorodu</option>
                <option value="kola">Kola</option>
                <option value="igando">Igando</option>
                <option value="ikotun">Ikotun</option>
                <option value="ipaja">Ipaja</option>
                <option value="obalende">Obalende</option>
                <option value="ibeju">Ibeju </option>
                <option value="lekki">Lekki</option>
                <option value="yaba-jibowu-ebute meta">
                  Yaba-Jibowu-Ebute Meta
                </option>
                <option value="barriga">Barriga</option>
                <option value="surulere">Surulere</option>
                <option value="apapa">Apapa</option>
              </select>
            </div>
          </div>
          <div className="grid">
            <section className="date-section">
              <h1>SELECT YOUR DATE</h1>
              <p>(pick the time alligned with the day)</p>
              <div htmlFor="dateTime">
              <div className="radio" >
                <h2>MONDAY</h2>
                <label>
                  {""}
                  <input
                    type="radio"
                    name="dayTime"
                    value="MONDAY  7:30AM - 3:00PM"
                    // checked={values.Time}
                    onChange={onValue}
                    required
                  />
                  7:30AM - 3PM
                </label>
                <label>
                  {" "}
                  <input
                    type="radio"
                    name="dayTime"
                    value="MONDAY  8:30AM - 4PM"
                    // checked={values.Time}
                    onChange={onValue}
                    required
                  />
                  8:30AM - 4PM
                </label>
                <label>
                  {" "}
                  <input
                    type="radio"
                    name="dayTime"
                    value="MONDAY  11:00AM - 5PM"
                    // checked={values.Time}
                    onChange={onValue}
                    required
                  />
                  11:00AM - 5PM
                </label>
                <label>
                  {" "}
                  <input
                    type="radio"
                    name="dayTime"
                    value="MONDAY 12:00AM - 6PM"
                    // checked={values.Time}
                    onChange={onValue}
                    required
                  />
                  12:00AM - 6PM
                </label>
              </div>
              <div className="radio">
                <h2>TUESDAY</h2>
                <label>
                  {""}
                  <input
                    type="radio"
                    name="dayTime"
                    value="tuesday 7:30AM - 3:00PM"
                    // checked={values.Time}
                    onChange={onValue}
                    required
                  />{" "}
                  7:30AM - 3PM
                </label>
                <label>
                  {" "}
                  <input
                    type="radio"
                    name="dayTime"
                    value="tuesday 8:30AM - 4PM"
                    // checked={values.Time}
                    onChange={onValue}
                    required
                  />{" "}
                  8:30AM - 4PM
                </label>
                <label>
                  {" "}
                  <input
                    type="radio"
                    name="dayTime"
                    value="tuesday 11:00AM - 5PM"
                    // checked={values.Time}
                    onChange={onValue}
                    required
                  />
                  11:00AM - 5PM
                </label>
                <label>
                  {" "}
                  <input
                    type="radio"
                    name="dayTime"
                    value="tuesday 12:00AM - 6PM"
                    // checked={values.Time}
                    onChange={onValue}
                    required
                  />
                  12:00AM - 6PM
                </label>
              </div>

              <div className="radio">
                <h2>WEDNESDAY</h2>
                <label>
                  {""}
                  <input
                    type="radio"
                    name="dayTime"
                    value="wednesday 7:30AM - 3:00PM"
                    // checked={values.Time}
                    onChange={onValue}
                    required
                  />
                  7:30AM - 3:00PM
                </label>
                <label>
                  {" "}
                  <input
                    type="radio"
                    name="dayTime"
                    value="wednesday 8:30AM - 4PM"
                    // checked={values.Time}
                    onChange={onValue}
                    required
                  />
                  8:30AM - 4PM
                </label>
                <label>
                  {" "}
                  <input
                    type="radio"
                    name="dayTime"
                    value="wednesday 11:00AM - 5PM"
                    // checked={values.Time}
                    onChange={onValue}
                    required
                  />
                  11:00AM - 5PM
                </label>
                <label>
                  {" "}
                  <input
                    type="radio"
                    name="dayTime"
                    value="wednesday 12:00AM - 6PM"
                    // checked={values.Time}
                    onChange={onValue}
                    required
                  />
                  12:00AM - 6PM
                </label>
              </div>

              <div className="radio">
                <h2>THURSDAY</h2>
                <label>
                  {""}
                  <input
                    type="radio"
                    name="dayTime"
                    value="thursday 7:30AM - 3:00PM"
                    // checked={values.Time}
                    onChange={onValue}
                    required
                  />
                  7:30AM - 3:00PM
                </label>
                <label>
                  {" "}
                  <input
                    type="radio"
                    name="dayTime"
                    value="thursday 8:30AM - 4PM"
                    // checked={values.Time}
                    onChange={onValue}
                    required
                  />
                  8:30AM - 4PM
                </label>
                <label>
                  {" "}
                  <input
                    type="radio"
                    name="dayTime"
                    value="thursday 11:00AM - 5PM"
                    // checked={values.Time}
                    onChange={onValue}
                    required
                  />
                  11:00AM - 5PM
                </label>
                <label>
                  {" "}
                  <input
                    type="radio"
                    name="dayTime"
                    value="thursday 12:00AM - 6PM"
                    // checked={values.Time}
                    onChange={onValue}
                    required
                  />
                  12:00AM - 6PM
                </label>
              </div>

              <div className="radio">
                <h2>FRIDAY</h2>
                <label>
                  {""}
                  <input
                    type="radio"
                    name="dayTime"
                    value="friday 7:30AM - 3:00PM"
                    // checked={values.Time}
                    onChange={onValue}
                    required
                  />{" "}
                  7:30AM - 3:00PM
                </label>
                <label>
                  {" "}
                  <input
                    type="radio"
                    name="dayTime"
                    value="friday 8:30AM - 4PM"
                    // checked={values.Time}
                    onChange={onValue}
                    required
                  />
                  8:30AM - 4PM
                </label>
                <label>
                  {" "}
                  <input
                    type="radio"
                    name="dayTime"
                    value="friday 11:00AM - 5PM"
                    // checked={values.Time}
                    onChange={onValue}
                    required
                  />
                  11:00AM - 5PM
                </label>
                <label>
                  {" "}
                  <input
                    type="radio"
                    name="dayTime"
                    value="friday 12:00AM - 6PM"
                    // checked={values.Time}
                    onChange={onValue}
                    required
                  />
                  12:00AM - 6PM
                </label>
                </div>
              </div>
            </section>
          </div>
          <div>
            {" "}
            <button type="submit">submit</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Display;
