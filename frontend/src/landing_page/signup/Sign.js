import React from "react";

function Sign(){
    return(
         <div className="container p-5 mb-5">
      <div className="row text-center">
        <h1 className="mt-5">Redirect to Dashboard</h1>
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          <a href="http://localhost:3001/" style={{textDecoration:"none", color:"white"}}>Sign up now</a>
        </button>
      </div>
    </div>
    )};

export default Sign;