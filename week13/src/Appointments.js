import React from "react";

/* ------------------ Part 2: Creating our Table  --------------------- */

/** Note: Feel free to copy/paste this into your Appointments.js for easier visibility.
 *
 * Goal: Create a table that renders allCustomers
 *
 * Step 1: Create a table with a thead/tbody. The thead should have a row with
 *         3 th elements: First Name, Last Name, and Appointment Time.
 * Step 2: Inside of your tbody, create a <tr> element that will .map()
 *         over this.customersArray and return
 *         3 <td> elements, one for firstName, lastName, and appointmentTime.
 *
 *         Check the README for a .map() hint.
 * Step 3: Style it with css using the App.css file!
 *
 */

export default function Appointments(props) {
  return (
    <table className="appointment-table">
      <thead className="table-head">
        <th>First Name</th>
        <th>Last Name</th>
        <th>Appointment Time</th>
      </thead>
      <tbody className="table-body">
        {props.customers.map((appt, index) => (
          <tr key={index}>
            <td>{appt.firstName}</td>
            <td>{appt.lastName}</td>
            <td>{appt.appointmentTime}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
