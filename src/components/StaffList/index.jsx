import React from "react";
import { Link } from "react-router-dom";
import "./StaffList.scss";
import SearchStaff from "../SearchStaff";
import AddStaff from "../AddStaff";

function StaffList(props) {
  return (
    <>
      <div className="container-xl">
        <h2>Nhân viên</h2>
        <div className="d-flex mb-3 justify-content-between row">
          <AddStaff onSubmit={props.onSubmit} />
          <SearchStaff onClick={props.onClick} />
        </div>
        <hr />
        <div className="row">
          {props.STAFFSList.map((e) => (
            <Link
              to={{
                pathname: `/StaffList/${e.id}`,
                state: e.id,
              }}
              key={e.id}
              style ={{textDecoration: "none"}}
              className="col-lg-2 col-sm-4 col-6"
            >
              <div className="cell">
                <img src={e.image} />
                {e.name}
              </div>
            </Link>
          ))}
        </div>
        <hr />
      </div>
    </>
  );
}

export default StaffList;
