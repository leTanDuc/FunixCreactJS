import React from "react";
import { STAFFS } from "./staffs";
import { Link } from "react-router-dom";

const Payroll = () => {

    const payrollStaffs = STAFFS.map((e) => {
        
        return(
            <>
            <div className="col-md-4 col-sm-6">
                <div className="bg-light salary">
                    <h3>{e.name}</h3>
                    <p>Mã nhân viên: {e.id}</p>
                    <p>Hệ số lương: {e.salaryScale}</p>
                    <p>Số giờ làm thêm: {e.overTime}</p>
                    <div className="salary-box">
                        <p>Lương: </p>
                    </div>
                </div>
            </div>            
            </>
        )
    });
    
    return(
        <>
        <div className="container-xl">
            <ul className="pagination">
                <li className="breadcrumb-item"><Link to="/">Nhân viên</Link></li>
                <li className="breadcrumb-item active">Bảng lương</li>
            </ul>
            <hr/>
            <div className="row">
            {payrollStaffs}
            </div>
            <hr/>
        </div>
        </>
    )
};

export default Payroll;