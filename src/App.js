import './App.css';
import { Route, Switch } from 'react-router-dom';

import Header from './components/HeaderComponent';
import Navbar from './components/NavbarComponent';
import StaffList from './components/StaffListComponent';
import InfoStaff from './components/InfoComponent';
import Department from './components/DepartmentComponent';
import Payroll from './components/PayrollComponent';
import Footer from './components/FooterComponent';

function App() {
    return (
      <>
      <Header/>
      <Navbar/>
      <Switch>
        <Route path="/" exact component={StaffList} />
        <Route path="/StaffList/:id" component={InfoStaff}/>
        <Route path="/Department" component={Department} />
        <Route path="/Payroll" component={Payroll} />
      </Switch>
      <Footer/>
      </>
  );
};

export default App;
