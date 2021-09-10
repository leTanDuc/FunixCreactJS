import React, { useState } from "react";
import { STAFFS } from "./staffs";
import dateFormat from "dateformat";


const StaffList = () => {
    
    

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
                    
                    <h5>Chọn vào nhân viên để xem thêm thông tin</h5>
                </div>
                
            </div>
            <hr></hr>
        </>
    )
};

export default StaffList;