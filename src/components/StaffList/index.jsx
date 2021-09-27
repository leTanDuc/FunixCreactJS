import React, { useState } from "react";
import PropTypes from "prop-types";
import { STAFFS } from "../staffs";
import { Link } from "react-router-dom";
import "./StaffList.scss";
import SearchStaff from "../SearchStaff";
import AddStaff from "../AddStaff";
import InfoStaff from "../Info";

function StaffList(props) {
  const [staffs, setStaffs] = useState(STAFFS);

  //Add staff
  function handleClickAdd(add) {
    const addNewStaff = {
      id: STAFFS.length,
      ...add,
    };
    const newSTAFFS = [...STAFFS, addNewStaff]
    // console.log(newSTAFFS)
    setStaffs(
      newSTAFFS
      // newSTAFFS
    )
  }

  //Search staff
  function handleClickSearch(search) {
    setStaffs(
      STAFFS.filter((x) => x.name.toLowerCase().match(search.toLowerCase()))
    );
  }

  return (
    <>
      <div className="container-xl">
        <h2>Nhân viên</h2>
        <div className="d-flex mb-3 justify-content-between row ">
          <AddStaff onClick={handleClickAdd} />
          <SearchStaff onClick={handleClickSearch} />
        </div>
        <hr />
        <div className="row">
          {staffs.map((e) => (
            <Link
              to={{
                pathname: `/StaffList/${e.id}`,
                state: e.id,
              }}
              key={e.id}
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
