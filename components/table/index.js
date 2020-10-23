import React from "react"

function Table(props) {
    return (
        <table className="table">
            <thead className="thead-light">
                <tr>
                    <th scope="col"></th>
                    <th scope="col">{props.firstHeader}</th>
                    <th scope="col">{props.lastHeader}</th>
                    <th scope="col">{props.emailHeader}</th>
                </tr>
            </thead>
            <Searchresults results={props.results} />
        </table>
    )
}

export default Table 