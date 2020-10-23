import React from "react"

function Table(props) {
    return(
        <table className="table">
  <thead className="thead-light">
    <tr>
      <th scope="col"></th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Amanda</td>
      <td>Mahon</td>
      <td>amanda@gmail.com</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Emily</td>
      <td>Burke</td>
      <td>emily@gmail.com</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Morgan</td>
      <td>Vaughan</td>
      <td>morgan@gmail.com</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>Allison</td>
      <td>Fitzgerald</td>
      <td>allison@gmail.com</td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td>Peyton</td>
      <td>Allison</td>
      <td>peyton@gmail.com</td>
    </tr>
    <tr>
      <th scope="row">6</th>
      <td>Kendall</td>
      <td>Masterson</td>
      <td>kendall@gmail.com</td>
    </tr>
  </tbody>
</table>
    )
}

export default Table 