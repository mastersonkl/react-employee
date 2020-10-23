import React from "react"

function Searchbar(props) {
    return (
        <form className="search">
            <div className="form-group row col-lg-12 col-md-10 col-sm-8">
                <label htmlFor="name" className="col-form-label col-md-4 text-center">Search by Name</label>
                <div className="col-md-6 px-0">
                    <input
                        type="email"
                        value={props.search}
                        onChange={props.handleInputChange}
                        name="search"
                        list="names"
                        className="form-control"
                        placeholder="Search All Employees Here"
                        id="inputEmail4"
                    />
                </div>
                <div className="col-md-2 mx-0 px-0">
                    <button type="reset" onClick={props.handleReset} className="btn btn-secondary col-2">X</button>
                </div>


            </div>
        </form>
    );
}

export default Searchbar 