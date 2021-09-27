import React from "react";
import { STAFFS } from "../staffs";
import { Link } from "react-router-dom";
import "./Payroll.scss"

function Payroll(props) {

    const payrollStaffs = props.STAFFSList.map((e) => {
        const basicSalary = 3000000;
        const overTime = 200000;
        const a = e.salaryScale;
        const b = e.overTime;
        const salary = ((a*basicSalary)+(b*overTime)).toFixed();
        
        return(
            <>
            <div key={e.id} className="col-lg-4 col-sm-6 col-12">
                <div className="color-background-cell salary">
                <Link to={{
                        pathname: `/StaffList/${e.id}`,
                        state: e.id
                    }}>
                    <h3>{e.name}</h3>
                </Link>
                    <p>Mã nhân viên: {e.id}</p>
                    <p>Hệ số lương: {e.salaryScale}</p>
                    <p>Số giờ làm thêm: {e.overTime}</p>
                    <div className="salary-box">
                        <p>Lương: {salary}</p>
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