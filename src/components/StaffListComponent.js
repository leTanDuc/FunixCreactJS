import React from "react";
import { STAFFS } from "./staffs";
import { Link } from "react-router-dom";

const StaffList = () => {
    return(
        <>
        <div className="container-xl">
            <div>
                <h2>Nhân viên</h2>
                <hr/>
            </div>
            <div className="row">
                {STAFFS.map(e => 
                    <Link to={{
                        pathname: `/StaffList/${e.id}`,
                        state: e.id
                    }}
                    key={e.id} className="col-lg-2 col-sm-4 col-6">
                        <div className="cell">
                            <img src={e.image}/>  
                            {e.name}
                        </div>
                    </Link>)}
            </div>
            <hr/>
        </div>
        </>
    )
};

export default StaffList;