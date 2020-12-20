import React from "react";

const LicensurePeriods = ({licensurePeriods}) => (

    <div className="calendar licensure-row"> 
        <input type="text" placeholder="mm/dd/yyyy" name="licensureStartDate" className="form-control start"></input>
        
        <input type="text" placeholder="mm/dd/yyyy" name="licensureEndDate" className="form-control end" ></input>
        <span className="delete" id="delete">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="delete" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M7 4V2h10v2h5v2h-2v15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6H2V4h5zM6 6v14h12V6H6zm3 3h2v8H9V9zm4 0h2v8h-2V9z"></path></g></svg>
        </span>
        <hr className="divider"></hr>

    </div>
    )

export default LicensurePeriods;
