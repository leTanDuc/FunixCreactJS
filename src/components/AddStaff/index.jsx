import React, { useState } from "react";
import { DEPARTMENTS } from "../staffs";
import "./AddStaff.scss";
import {
  Modal,
  ModalBody,
  ModalHeader,
  Form,
  FormGroup,
  Label,
  Col,
  Input,
  FormFeedback,
  Button,
} from "reactstrap";

function AddStaff(props) {
  const { onSubmit } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  //Name staff
  const [valuename, SetValuename] = useState("");
  const [errName, setErrName] = useState("Yêu cầu nhập");
  function handleValueChangename(value) {
    if (!value) {
      setErrName("Yêu cầu nhập");
    } else if (value.length < 2) {
      setErrName("Nhập nhiều hơn 2 ký tự");
    } else if (value.length > 30) {
      setErrName("Yêu cầu ít hơn 30 ký tự");
    } else {
      setErrName("");
    }
    SetValuename(value);
  }

  //dob staff
  const [valuedoB, SetValuedoB] = useState("");
  const [errDoB, setErrDoB] = useState("Yêu cầu nhập");
  function handleValueChangedoB(value) {
    if (!value) {
      setErrDoB("Yêu cầu nhập");
    } else {
      setErrDoB("");
    }
    SetValuedoB(value);
  }

  //StartDate staff
  const [valuestartDate, SetValuestartDate] = useState("");
  const [errStartDate, setErrStartDate] = useState("Yêu cầu nhập");
  function handleValueChangestartDate(value) {
    if (!value) {
      setErrStartDate("Yêu cầu nhập");
    } else {
      setErrStartDate("");
    }
    SetValuestartDate(value);
  }

  //Department staff
  const [valuedepartment, setVluedepartment] = useState(DEPARTMENTS[0].id);
  function handleValueChangedepartment(value) {
    setVluedepartment(value);
  }

  //SalaryScale staff
  const [valuesalaryScale, SetValuesalaryScale] = useState("");
  const [errSalary, setErrSalary] = useState("Yêu cầu nhập");
  function handleValueChangesalaryScale(value) {
    if (!value) {
      setErrSalary("Yêu cầu nhập");
    } else if (+value < 1) {
      setErrSalary("Yêu cầu nhập số trong khoảng 1-3");
    } else if (+value > 3) {
      setErrSalary("Yêu cầu nhập số trong khoảng 1-3");
    } else {
      setErrSalary("");
    }
    SetValuesalaryScale(value);
  }

  //AnnualLeave staff
  const [valueannualLeave, SetValueannualLeave] = useState("");
  function handleValueChangeannualLeave(value) {
    SetValueannualLeave(value);
  }

  //OverTime staff
  const [valueoverTime, SetValueoverTime] = useState("");
  function handleValueChangeoverTime(value) {
    SetValueoverTime(value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsSubmit(true);
    if (errName || errDoB || errStartDate || errSalary) {
      return;
    }
    const selectDepart = DEPARTMENTS.find((x) => x.id === valuedepartment);
    const newStaff = {
      name: valuename,
      doB: valuedoB,
      salaryScale: valuesalaryScale,
      startDate: valuestartDate,
      department: selectDepart,
      annualLeave: valueannualLeave,
      overTime: valueoverTime,
      image: "/assets/images/alberto.png",
    };

    onSubmit(newStaff);

    setIsSubmit(false);
    toggle();

    handleValueChangename("");
    handleValueChangedoB("");
    handleValueChangesalaryScale("");
    handleValueChangestartDate("");
    handleValueChangeannualLeave("");
    handleValueChangeoverTime("");

    // SetValuename("");
    // SetValuedoB("");
    // SetValuesalaryScale("");
    // SetValuestartDate("");
    // SetValueannualLeave("");
    // SetValueoverTime("");
  }

  return (
    <Col sm={6}>
      <div className="p-2">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => setIsOpen(true)}
        >
          Add
        </button>
      </div>

      {/*The Modal*/}
      <Modal isOpen={isOpen} toggle={toggle}>
        {/*Modal Header*/}
        <ModalHeader toggle={toggle}>Thêm nhân viên</ModalHeader>
        {/*Modal body*/}
        <ModalBody>
          <Form onSubmit={handleSubmit}>
            <FormGroup className="mt-3" row>
              <Label sm={3}>Tên</Label>
              <Col sm={9}>
                <Input
                  type="text"
                  value={valuename}
                  onChange={(e) => handleValueChangename(e.target.value)}
                  valid={!errName && isSubmit}
                  invalid={errName && isSubmit}
                ></Input>
                <FormFeedback>{errName}</FormFeedback>
              </Col>
            </FormGroup>
            <FormGroup className="mt-3" row>
              <Label sm={3}>Ngày sinh</Label>
              <Col sm={9}>
                <Input
                  type="date"
                  value={valuedoB}
                  onChange={(e) => handleValueChangedoB(e.target.value)}
                  valid={!errDoB && isSubmit}
                  invalid={errDoB && isSubmit}
                ></Input>
                <FormFeedback>{errDoB}</FormFeedback>
              </Col>
            </FormGroup>
            <FormGroup className="mt-3" row>
              <Label sm={3}>Ngày vào làm</Label>
              <Col sm={9}>
                <Input
                  type="date"
                  value={valuestartDate}
                  onChange={(e) => handleValueChangestartDate(e.target.value)}
                  valid={!errStartDate && isSubmit}
                  invalid={errStartDate && isSubmit}
                ></Input>
                <FormFeedback>{errStartDate}</FormFeedback>
              </Col>
            </FormGroup>
            <FormGroup className="mt-3" row>
              <Label sm={3}>Phòng ban</Label>
              <Col sm={9}>
                <select
                  className="form-control"
                  value={valuedepartment}
                  onChange={(e) => handleValueChangedepartment(e.target.value)}
                >
                  {DEPARTMENTS.map((e, index) => (
                    <option value={DEPARTMENTS[index].id} key={index}>
                      {e.name}
                    </option>
                  ))}
                </select>
              </Col>
            </FormGroup>
            <FormGroup className="mt-3" row>
              <Label sm={3}>Hệ số lương</Label>
              <Col sm={9}>
                <Input
                  type="number"
                  value={valuesalaryScale}
                  onChange={(e) => handleValueChangesalaryScale(e.target.value)}
                  valid={!errSalary && isSubmit}
                  invalid={errSalary && isSubmit}
                ></Input>
                <FormFeedback>{errSalary}</FormFeedback>
              </Col>
            </FormGroup>
            <FormGroup className="mt-3" row>
              <Label sm={3}>Số ngày nghỉ còn lại</Label>
              <Col sm={9}>
                <Input
                  type="number"
                  value={valueannualLeave}
                  onChange={(e) => handleValueChangeannualLeave(e.target.value)}
                ></Input>
              </Col>
            </FormGroup>
            <FormGroup className="mt-3" row>
              <Label sm={3}>Số ngày đã làm thêm</Label>
              <Col sm={9}>
                <Input
                  type="number"
                  value={valueoverTime}
                  onChange={(e) => handleValueChangeoverTime(e.target.value)}
                ></Input>
              </Col>
            </FormGroup>
            <Button type="submit" className="mt-3 ">
              Thêm
            </Button>
          </Form>
        </ModalBody>
      </Modal>
    </Col>
  );
}

export default AddStaff;
