import './App.css';
import { Route, Switch } from 'react-router-dom';

import Header from './components/HeaderComponent';
import Navbar from './components/NavbarComponent';
import StaffList from './components/StaffListComponent';
import InfoStaff from './components/InfoComponent';
import Footer from './components/FooterComponent';

function App() {
    return (
      <>
      <Header/>
      <Navbar/>
      <Switch>
        <Route path="/" exact component={StaffList} />
        <Route path="/StaffList/:id" component={InfoStaff}/>
      </Switch>
      <Footer/>
      </>
  );
};

export default App;
