import React from "react";
import dateFormat from "dateformat";
import { Link } from "react-router-dom";
import "./Info.scss"

function InfoStaff(props) {

    let staffId = props.location.state ;
    let staff =  props.STAFFSList[staffId];

    return(
        <>
        <div className="container-sm">
            <ul className="pagination">
                <li className="breadcrumb-item"><Link to="/">Nhân viên</Link></li>
                <li className="breadcrumb-item active">{staff.name}</li>
            </ul>
            <hr/>
            <div className="row info-staff">
                <div className="col-lg-3 col-sm-4 col-12 info-img">
                    <img src={staff.image}/>
                </div>
                <div className="col-lg-9 col-sm-8 col-12">
                    <h4>Họ và tên: {staff.name}</h4>
                    <p>Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}</p>
                    <p>Ngày vào công ty: {dateFormat(staff.startDate, "dd/mm/yyyy")}</p>
                    <p>Phòng ban: {staff.department.name}</p>
                    <p>Số ngày nghỉ còn lại: {staff.annualLeave}</p>
                    <p>Số ngày đã làm thêm: {staff.overTime}</p> 
                </div>
            </div>
            <hr/>
        </div>          
        </>
    );
};

export default InfoStaff;