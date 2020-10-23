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

    function handleReset() {
        setSearch("")
    }

    function handleBtnClick(e) {
        let btnType = e.target.getAttribute("data-value")
        let newArray = [...employees]

        if (employees.length === 0) {
            return
        }
        if (btnType === "first-name-sort") {
            const firstArray = newArray.sort((a,b) => (a.firstName > b.firstName) ? 1 : (b.firstName > a.firstName) ? -1 : 0)
            console.log("sort first name", firstArray)
            setEmployees(firstArray)
        }
        else if (btnType === "last-name-sort") {
            const lastArray = newArray.sort((a,b) => (a.lastName > b.lastName) ? 1 : (b.lastName > a.lastName) ? -1 : 0)
            console.log("sort last name", lastArray)
            setEmployees(lastArray)
        }
       
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
            return item.firstName.includes(search) || item.lastName.includes(search)
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
                        id: employee.id.value,
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
            <Searchbar handleInputChange={handleInputChange} handleReset={handleReset} search={search} />
            <Table results={employeeSearch()} handleBtnClick={handleBtnClick}/>
        </div>
    )
}





export default Main 