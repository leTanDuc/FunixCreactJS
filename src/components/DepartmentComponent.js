import React from "react";
import { DEPARTMENTS } from "./staffs";
import { Link } from "react-router-dom";

const Department = () => {
    return(
        <>
        <div className="container-xl">
            <ul className="pagination">
                <li className="breadcrumb-item"><Link to="/">Nhân viên</Link></li>
                <li className="breadcrumb-item active">Phòng ban</li>
            </ul>
            <hr/>
            <div className="row">
                {DEPARTMENTS.map((e) => 
                    <div className="col-md-4">
                        <div className="bg-light department">
                            <h2>{e.name}</h2>
                            <p>Số lượng nhân viên: {e.numberOfStaff}</p>
                        </div>
                    </div>)}
            </div>
            <hr/>
        </div>
        </>
    )
}

export default Department;