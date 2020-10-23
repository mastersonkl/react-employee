import React from "react"

function Table(props) {
    return (
        <table className="table">
            <thead className="thead-light">
                <tr>
                    <th scope="col"></th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Email</th>
                </tr>
            </thead>
            <Searchresults results={props.results} />
        </table>
    )
}

export default Table 