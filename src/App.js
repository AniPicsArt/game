import React from 'react';
import useStyles from './styles.js';
import GameField from './gameField.js';

function App() {
  const classes = useStyles();
  return (
      <div className={classes.App}>
        <GameField/>
      </div>
  );
}

export default App;
