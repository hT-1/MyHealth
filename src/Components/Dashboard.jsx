import React from 'react';
import Calendar from '../Containers/Calendar.jsx';
import Sidebar from '../Containers/Sidebar.jsx';


const Dashboard = () =>
  (
    <div id="container">
      <Calendar />
      <Sidebar />
    </div>
  );

export default Dashboard;
