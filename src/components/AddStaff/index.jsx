import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { DEPARTMENTS } from '../staffs';

AddStaff.propTypes = {
    onClick: PropTypes.func,
};

function AddStaff(props) {
    const { onClick } = props;
    const [ valuename, SetValuename ] = useState("");
    const [ valuedoB, SetValuedoB ] = useState("");
    const [ valuesalaryScale, SetValuesalaryScale ] = useState("");
    const [ valuestartDate, SetValuestartDate ] = useState("");
    const [ valuedepartment, setVluedepartment ] = useState("");
    const [ valueannualLeave, SetValueannualLeave ] = useState("");
    const [ valueoverTime, SetValueoverTime ] = useState("");

    function handleValueChangename(e) {
        SetValuename(e.target.value);    
    };
    function handleValueChangedoB(e) {
        SetValuedoB(e.target.value);
    }
    function handleValueChangesalaryScale(e) {
        SetValuesalaryScale(e.target.value);
    }
    function handleValueChangestartDate(e) {
        SetValuestartDate(e.target.value);
    }
    function handleValueChangedepartment(e) {
        setVluedepartment(e.target.value);
    }
    function handleValueChangeannualLeave(e) {
        SetValueannualLeave(e.target.value);
    }
    function handleValueChangeoverTime(e) {
        SetValueoverTime(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        const newStaff = {
            name: valuename,
            doB: valuedoB,
            salaryScale: valuesalaryScale,
            startDate: valuestartDate,
            department: valuedepartment,
            annualLeave: valueannualLeave,
            overTime: valueoverTime,
            image: '/assets/images/alberto.png',
        };
        
        onClick(newStaff);

        SetValuename('');
        SetValuedoB('');
        SetValuesalaryScale('');
        SetValuestartDate('');
        SetValueannualLeave('');
        SetValueoverTime('');
    };

    return (
        <>
        <div className="p-2 mr-auto">
            <form className="form-inline">
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">
                    Add
                </button>
            </form>
        </div>

        {/* <!-- The Modal --> */}
        <div class="modal fade" id="myModal">
            <div class="modal-dialog">
                <div class="modal-content">
                        
                    {/* <!-- Modal Header --> */}
                    <div class="modal-header">
                        <h4 class="modal-title">Thêm nhân viên</h4>
                        <button type="button" class="close" data-dismiss="modal">×</button>
                    </div>
                                        
                    {/* <!-- Modal body --> */}
                    <div class="modal-body">
                        <form className="d-flex justify-content-between mb-3">
                            <label for="name">Tên </label>
                            <input type="text" id="name" value={valuename} onChange={handleValueChangename}/>
                        </form>
                        <form className="d-flex justify-content-between mb-3">
                            <label for="doB">Ngày sinh </label>
                            <input type="date" id="doB" value={valuedoB} onChange={handleValueChangedoB}/>
                        </form>                    
                        <form className="d-flex justify-content-between mb-3">
                            <label for="startDate">Ngày vào làm </label>
                            <input type="date" id="startDate" value={valuestartDate} onChange={handleValueChangestartDate}/>
                        </form>
                        <form className="d-flex justify-content-between mb-3">
                            <label for="department">Phòng ban </label>
                            <select className="form-control" id="department" value={valuedepartment} onChange={handleValueChangedepartment}>
                                <option>{DEPARTMENTS[0].name}</option>
                                <option>{DEPARTMENTS[1].name}</option>
                                <option>{DEPARTMENTS[2].name}</option>
                                <option>{DEPARTMENTS[3].name}</option>
                                <option>{DEPARTMENTS[4].name}</option>
                            </select>
                        </form>
                        <form className="d-flex justify-content-between mb-3">
                            <label for="salaryScale">Hệ số lương </label>
                            <input type="number" id="salaryScale" value={valuesalaryScale} onChange={handleValueChangesalaryScale}/>
                        </form>
                        <form className="d-flex justify-content-between mb-3">
                            <label for="annualLeave">Số ngày nghỉ còn lại </label>
                            <input type="number" id="annualLeave" value={valueannualLeave} onChange={handleValueChangeannualLeave}/>
                        </form>
                        <form className="d-flex justify-content-between mb-3">
                            <label for="overTime">Số ngày đã làm thêm </label>
                            <input type="number" id="overTime" value={valueoverTime} onChange={handleValueChangeoverTime}/>
                        </form>
                    </div>
                                        
                    {/* <!-- Modal footer --> */}
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" data-dismiss="modal" onClick={handleSubmit}>Thêm</button>
                    </div>
                            
                </div>
            </div>
        </div>
        </>
    );
}

export default AddStaff;