import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import MainContent from './Components/MainContent.jsx';
import Header from './Components/Header.jsx';

const mapStateToProps = store => ({
  currentMonth: store.data.currMonth
});
const mapDispatchToProps = () => ({
});

const App = () =>
  (
    <BrowserRouter>
      <div className="mainContainer">
        <Header month={this.props.currentMonth} />
        <MainContent />
      </div>
    </BrowserRouter>
  );

export default connect(mapStateToProps, mapDispatchToProps)(App);
