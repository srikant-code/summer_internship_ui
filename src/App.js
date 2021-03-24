import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Landing from "../src/views/Landing";
import { ROLL_NUMBER } from '../src/utils/constants';
// import theme from '../src/utils/theme';
// import CollectorDashboard from '../src/views/CollectorDashboard';

const useStyles = makeStyles((theme) => ({
  '@global': {
    '*::-webkit-scrollbar': {
      width: '0.4em',
      height: '0.4em',
    },
    '*::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)',
    },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: '#6D7183',
      outline: '1px solid slategrey',
    },
  },
  mainBackground: {
    background: "transparent radial-gradient(closest-side at 50% 50%, #58687E 0%, #39495E 100%) 0% 0% no-repeat padding-box;",
    height: '100vh',
    width: '100vw',
    overflow: 'hidden',
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
}));
const App = () => {
  const classes = useStyles();
  return (
    <div className={ classes.mainBackground }>
      <Router basename={ `/${ROLL_NUMBER}` }>
        <Route exact path="/" component={ Landing } />
      </Router>
    </div>
  );
};

export default App;
