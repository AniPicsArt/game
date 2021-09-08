import React, { useState, useCallback } from 'react';
import useStyles from './styles.js';
import GameField from './components/gameField/gameField.js';

function App() {
  const classes = useStyles();
  const [startGame, setStartGame] = useState(false);

  return (
      <div className={classes.App}>
              {startGame ?<GameField/> : <div className={classes.startContainer} onClick={() => setStartGame(true)}>
          <button className={classes.btn}>Start</button>
      </div> }
      </div>
  );
}

export default App;
