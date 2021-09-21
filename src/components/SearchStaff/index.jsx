import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { STAFFS } from "../staffs";

SearchStaff.propTypes = {
    onClick: PropTypes.func,
};

function SearchStaff(props) {
    const { onClick } = props;

    const [value, setValue] = useState("");

    function handleValueChange(e) {
        setValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let staffPindName = STAFFS.filter(x => new RegExp(value).test(x.name));
        onClick(staffPindName);
    };
    
    return (
        <>  
        <div className="p-2">
            <form className="form-inline">
                <input className="form-control mr-sm-2" type="text" value={value} onChange={handleValueChange}/>
                <button className="btn btn-primary" onClick={handleSubmit}>Search</button>
            </form>
        </div>
        </>
    );
}

export default SearchStaff;