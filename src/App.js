import './App.css';
import { Route, Switch } from 'react-router-dom';
import React, { useState } from 'react';
import Header from './components/Header/index';
import Navbar from './components/Navbar/index';
import StaffList from './components/StaffList/index';
import InfoStaff from './components/Info/index';
import Department from './components/Department/index';
import Payroll from './components/Payroll/index';
import Footer from './components/Footer/index';
import { STAFFS } from './components/staffs';

function App() {
  const [staffs, setStaffs] = useState(STAFFS);

  //Add staff
  function handleClickAdd(add) {
    const addNewStaff = {
      id: staffs.length,
      ...add,
    };
    const newSTAFFS = [...staffs, ...[addNewStaff]]
    STAFFS[addNewStaff.id] = addNewStaff
    setStaffs(
      newSTAFFS
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
      <Header/>
      <Navbar/>
      <Switch>
        <Route path="/" exact render={props => <StaffList {...props} STAFFSList={staffs} onClick={handleClickSearch} onSubmit={handleClickAdd}/>} />
        <Route path="/StaffList/:id" render={props => <InfoStaff {...props} STAFFSList={staffs} />}/>
        <Route path="/Department" component={Department} />
        <Route path="/Payroll" render={props =>  <Payroll {...props} STAFFSList={staffs} />} />
      </Switch>
      <Footer/>
      </>
  );
};

export default App;
