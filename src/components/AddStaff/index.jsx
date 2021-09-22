import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { DEPARTMENTS } from '../staffs';
import "./AddStaff.scss";

AddStaff.propTypes = {
    onClick: PropTypes.func,
};

function AddStaff(props) {
    const { onClick } = props;

    //Name staff
    const [ valuename, SetValuename ] = useState("");
    function handleValueChangename(e) {
        SetValuename(e.target.value);    
    };

    //dob staff
    const [ valuedoB, SetValuedoB ] = useState("");
    function handleValueChangedoB(e) {
        SetValuedoB(e.target.value);
    };

    //SalaryScale staff
    const [ valuesalaryScale, SetValuesalaryScale ] = useState("");
    function handleValueChangesalaryScale(e) {
        SetValuesalaryScale(e.target.value);
    };

    //StartDate staff
    const [ valuestartDate, SetValuestartDate ] = useState("");
    function handleValueChangestartDate(e) {
        SetValuestartDate(e.target.value);
    };

    //Department staff
    const [ valuedepartment, setVluedepartment ] = useState(DEPARTMENTS[0]);
    function handleValueChangedepartment(e) {
        let indexDepartment = DEPARTMENTS.findIndex(x => x.id === e.target.value);
        if (indexDepartment < 0) return;
        setVluedepartment(DEPARTMENTS[indexDepartment]);
    };
  
    //AnnualLeave staff
    const [ valueannualLeave, SetValueannualLeave ] = useState("");
    function handleValueChangeannualLeave(e) {
        SetValueannualLeave(e.target.value);
    };

    //OverTime staff
    const [ valueoverTime, SetValueoverTime ] = useState("");
    function handleValueChangeoverTime(e) {
        SetValueoverTime(e.target.value);
    };

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
        <div className="p-2">
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal">
                Add
            </button>
        </div>
         
        {/* <!-- The Modal --> */}
        <div className="modal fade" id="myModal">
            <div className="modal-dialog">
                <div className="modal-content">
                        
                    {/* <!-- Modal Header --> */}
                    <div className="modal-header">
                        <h4 className="modal-title">Thêm nhân viên</h4>
                        <button type="button" className="close" data-dismiss="modal">×</button>
                    </div>
                                        
                    {/* <!-- Modal body --> */}
                    <div className="modal-body">
                        <form className="d-flex justify-content-between mb-3">
                            <label for="name">Tên </label>
                            <input className="input-label" type="text" id="name" value={valuename} onChange={handleValueChangename}/>
                        </form>
                        <form className="d-flex justify-content-between mb-3">
                            <label for="doB">Ngày sinh </label>
                            <input className="input-label" type="date" id="doB" value={valuedoB} onChange={handleValueChangedoB}/>
                        </form>                    
                        <form className="d-flex justify-content-between mb-3">
                            <label for="startDate">Ngày vào làm </label>
                            <input className="input-label" type="date" id="startDate" value={valuestartDate} onChange={handleValueChangestartDate}/>
                        </form>
                        <form className="d-flex justify-content-between mb-3">
                            <label for="department">Phòng ban </label>
                            <select className="input-label" id="department" value={valuedepartment} onChange={handleValueChangedepartment}>
                                {DEPARTMENTS.map((e, index)=> 
                                    <option value={DEPARTMENTS[index].id} key={index}>{e.name}</option>
                                )}
                            </select>
                        </form>
                        <form className="d-flex justify-content-between mb-3">
                            <label for="salaryScale">Hệ số lương </label>
                            <input className="input-label" type="number" id="salaryScale" value={valuesalaryScale} onChange={handleValueChangesalaryScale}/>
                        </form>
                        <form className="d-flex justify-content-between mb-3">
                            <label for="annualLeave">Số ngày nghỉ còn lại </label>
                            <input className="input-label" type="number" id="annualLeave" value={valueannualLeave} onChange={handleValueChangeannualLeave}/>
                        </form>
                        <form className="d-flex justify-content-between mb-3">
                            <label for="overTime">Số ngày đã làm thêm </label>
                            <input className="input-label" type="number" id="overTime" value={valueoverTime} onChange={handleValueChangeoverTime}/>
                        </form>
                    </div>
                                        
                    {/* <!-- Modal footer --> */}
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={handleSubmit}>Thêm</button>
                    </div>
                            
                </div>
            </div>
        </div>
        </>
    );
}

export default AddStaff;