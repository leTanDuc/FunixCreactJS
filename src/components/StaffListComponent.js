import React, { useState } from "react";
import { STAFFS } from "./staffs";
import dateFormat from "dateformat";


const StaffList = () => {
    
    const [staffs, setStaffs] = useState(
        <h5>Chọn vào nhân viên để xem thêm thông tin</h5>
    );

    const Info = (e) => {
        let staffId = e.id;
        let staff = STAFFS[staffId];
        setStaffs(
            <>
            <div className="infoStaff col-md-5">
                <h4>Họ và tên: {staff.name}</h4>
                <p>Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}</p>
                <p>Ngày vào công ty: {dateFormat(staff.startDate, "dd/mm/yyyy")}</p>
                <p>Phòng ban: {staff.department.name}</p>
                <p>Số ngày nghỉ còn lại: {staff.annualLeave}</p>
                <p>Số ngày đã làm thêm: {staff.overTime}</p>
            </div>
            </>
        );
    };

    return(
        <>
            <div className="container-xl">
                <div className="row">
                    {STAFFS.map(e => 
                        <div key={e.id} className="col-sm-6">
                            <div className="cell" onClick={() => Info(e)}>{e.name}</div>
                        </div>)}
                </div>
                <div className="row">
                    {staffs}
                </div>               
            </div>
            <hr></hr>
        </>
    )
};

export default StaffList;