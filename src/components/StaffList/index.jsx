import React, { useState } from "react";
import PropTypes from 'prop-types';
import { STAFFS } from "../staffs";
import { Link } from "react-router-dom";
import "./StaffList.scss";
import SearchStaff from "../SearchStaff";
import AddStaff from "../AddStaff";

StaffList.prototype = {
    onClick: PropTypes.func,
};

function StaffList() {
    const [staffs, setStaffs] = useState(
        <>
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
        </>
    );

    //Add staff
    function handleClickAdd(newStaff) {
        const addNewStaff = {
            id: STAFFS.length,
            ...newStaff,
        };
        
        console.log(addNewStaff);

        STAFFS[addNewStaff.id] = addNewStaff;

        setStaffs(
            <>
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
            </>
        );
    };

    //Search staff
    function handleClickSearch(staffPindName) {
        setStaffs(
            <>
            <div className="row">
                {staffPindName.map(e => 
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
            </>
        );
    };

    return(
        <>
        <div className="container-xl">
            <h2>Nhân viên</h2>
            
                <form className="form-inline d-flex mb-3 justify-content-between row ">
                    <AddStaff onClick={handleClickAdd}/>
                    <SearchStaff onClick={handleClickSearch}/>
                </form>
        
            <hr/>       
            {staffs}
            <hr/>
        </div>
        </>
    );
};

export default StaffList;
