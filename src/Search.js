import React from "react";
import { useState } from "react";

const Search = (props)=> {

  return (
    <div>
      <div>
        <div className="mb-3 col-4 mx-auto text-center">
          <input
            type="text"
            className="from-control"
            placeholder={props.placeholder}
            onChange={props.handleChange}
          />
          </div>
          </div>
        </div>
  );
}

export default Search;

/* 


function Search() {
  const elecProblems = [
    "ABS SURGES",
    "BDK STRIKES",
    "HOUSE DAMGE",
    "POWER LINES",
    "MICROSOUND",
    "FREQUENT ELECTRICAL SURGES",
  ];

  const [filter, setFilter] = useState("");
  return (
    <div>
      <div className="col-12 mb-5">
        <div className="mb-3 col-4 mx-auto text-center">
          <label className="form-label h">Search Here..</label>
          <input
            type="text"
            className="from-control"
            placeholder="Search Issue.."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}



<>
<div className="col-12 mb-5">
  <div className="mb-3 col-4 mx-auto text-center">
    <label className="form-label h">Search Here..</label>
    <input
      type="text"
      className="from-control"
      value={filter}
      onChange={searchText.bind(this)}
    />
  </div>
</div>
</> */
