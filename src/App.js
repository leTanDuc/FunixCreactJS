import './App.css';
import { Route, Switch } from 'react-router-dom';

import Header from './components/Header/index';
import Navbar from './components/Navbar/index';
import StaffList from './components/StaffList/index';
import InfoStaff from './components/Info/index';
import Department from './components/Department/index';
import Payroll from './components/Payroll/index';
import Footer from './components/Footer/index';

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
