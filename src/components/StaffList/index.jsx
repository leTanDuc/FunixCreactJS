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

    const [STAFFSList, setSTAFFSList] = useState(STAFFS);

    const [staffs, setStaffs] = useState(
        <>
        <div className="row">
            {STAFFSList.map(e => 
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
            id: STAFFSList.length,
            ...newStaff,
        };
        
        let newSTAFFS = [...STAFFSList];
        newSTAFFS.push(addNewStaff);
        
        setSTAFFSList(newSTAFFS);
        setStaffs(
            <>
            <div className="row">
                {newSTAFFS.map(e => 
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
        )
    }

    return(
        <>
        <div className="container-xl">
            <h2>Nhân viên</h2>
            <div className="d-flex mb-3 color-background">
                <AddStaff onClick={handleClickAdd}/>
                <SearchStaff onClick={handleClickSearch}/>
            </div>
            <hr/>       
            {staffs}
            <hr/>
        </div>
        </>
    );
};

export default StaffList;
