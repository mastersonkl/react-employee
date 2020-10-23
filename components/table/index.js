import React from "react"
import Searchresults from "../Searchresults"
import SortBtn from "../sortBtn"

function Table(props) {
    console.log("Table", props.results)
   return(
       <div className="container">
           <div className="row my-2 ml-5">
               <div className="col-4 mx-2">
               <SortBtn handleBtnClick={props.handleBtnClick} data-value="first-name-sort" text="Sort by First Name">
               </SortBtn>
               </div>
               <div className="col-4 mx-2">
               <SortBtn handleBtnClick={props.handleBtnClick} data-value="last-name-sort" text="Sort by Last Name">
               </SortBtn>
               </div>
           </div>
           <div className="row">
               <table className="table">
               <thead className="thead-light">
                   <tr>
                   <th scope="col"></th>
                   <th scope="col">First Name</th>
                   <th scope="col">Last Name</th>
                   <th scope="col">Email</th>
                   </tr>
               </thead>
               <Searchresults results={props.results} handleBtnClick={props.handleBtnClick} />
               </table>
           </div>
       </div>
   )
}

export default Table 