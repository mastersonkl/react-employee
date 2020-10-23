import React from "react"
import Image from "../img/image"


function Searchresults(props) {
    return (
        <tbody className="search-results table-row">
            {props.results.map(result => (
                <tr key={result.firstName + result.lastName}>
                    
                    <th scope="row" key={result.id} className="employee-image entry"><Image image={result.image} /></th>
                    <td key={result.firstName} className="first-name entry">{result.firstName}</td>
                    <td key={result.lastName} className="last-name entry">{result.lastName}</td>
                    <td key={result.email} className="email entry">{result.email}</td>
                </tr>
            ))}
        </tbody>
    )
}

export default Searchresults 