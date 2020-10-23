import React, { useState, useEffect } from "react"
import Searchbar from "../components/searchbar"
import API from "../utils/api"
import Table from "../components/table"


function Main() {
    const [employees, setEmployees] = useState([])


    useEffect(() => {
        loadEmployees()
    }, [])

    function loadEmployees() {
        API.fetchEmployees()
            .then(res => {
                console.log("API res", res.data.results)
                const APIResults = res.data.results
                const results = APIResults.map(employee => {
                    return {
                        image: employee.picture.thumbnail,
                        firstName: employee.name.first,
                        lastName: employee.name.last,
                        email: employee.email
                    }
                })
                console.log("Employee Data", results)
                setEmployees(results)
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <Searchbar />
            <Table results={employees} />
        </div>
    )
}





export default Main 