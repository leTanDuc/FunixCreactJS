import React, { useRef } from "react";
import PropTypes from "prop-types";
import { Col } from "reactstrap";

SearchStaff.propTypes = {
  onClick: PropTypes.func,
};

function SearchStaff(props) {
  const { onClick } = props;
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = inputRef.current.value;
    onClick(value);
  };

  return (
    <Col className="p-2 d-flex" sm={6}>
      <input className="form-control mr-sm-2" type="text" ref={inputRef} />
      <button className="btn btn-primary" onClick={handleSubmit}>
        Search
      </button>
    </Col>
  );
}

export default SearchStaff;
