import React from "react";
import "./education.css";

const Education = () => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Department</th>
          <th>Institution</th>
          <th>Degree</th>
          <th>Year</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>BootCamp Grad</td>
          <td>Front End Web Design</td>
          <td>Online codewithmosh.com</td>
          <td>2023 - present</td>
        </tr>
        <tr>
          <td>Msc</td>
          <td>Management Information Systems</td>
          <td>Cyprus International University</td>
          <td>2015</td>
        </tr>
        <tr>
          <td>Bsc</td>
          <td>Industrial Physics</td>
          <td>Federal University Of Agriculture Makurdi, Nigeria</td>
          <td>2010</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Education;
