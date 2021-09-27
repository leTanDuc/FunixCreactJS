import React, { useRef } from "react";
import { Col } from "reactstrap";

function SearchStaff(props) {
  const { onClick } = props;
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    let value = inputRef.current.value;
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
