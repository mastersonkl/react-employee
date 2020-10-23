import React, { useState, useEffect } from "react"
import Searchbar from "../components/searchbar"
import API from "../utils/api"
import Table from "../components/table"


function Main() {
    const [employees, setEmployees] = useState([])

    const [search, setSearch] = useState("")

    const handleInputChange = e => {
        let value = e.target.value
        setSearch(value)
    }

    useEffect(() => {
        loadEmployees()
    }, [])


    function employeeSearch() {
        let newArray = [...employees]

        if (employees.length === 0) {
            return newArray
        }
        if (search === "") {
            return newArray
        }

        newArray = newArray.filter(item => {
            return item.firstName.includes(search)
        })

        return newArray
    }


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
            <Searchbar handleInputChange={handleInputChange} search={search} />
            <Table results={employeeSearch()} />
        </div>
    )
}





export default Main 