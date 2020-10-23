import React from "react"

function Searchbar(props) {
    return (
        <form className="search">
            <div className="form-group row col-md-6">
                <label htmlFor="name" className="col-form-label col-md-4">Search by Name</label>
                <div className="col-md-8">
                    <input
                        type="email"
                        value={props.search}
                        onChange={props.handleInputChange}
                        name="name"
                        list="names"
                        className="form-control"
                        placeholder="Search All Employees Here"
                        id="inputEmail4"
                    />
                </div>

            </div>
        </form>
    );
}

export default Searchbar 