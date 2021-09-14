import React, { useCallback, useState } from 'react';
import useStyles from './styles.js';
import GameField from './components/gameField/gameField.js';

function App() {
  const classes = useStyles();
  const [startGame, setStartGame] = useState(false);

const handleKeyDown = useCallback(event => {
    const { target, key, preventDefault } = event;
    // if (!eventKeyRegexp.test(target.value + key) || ((target.value + key).length > 6)) {
        preventDefault();
    // }


}, [])

  return (
      <div className={classes.App}>
          {startGame ? <GameField/> : <div className={classes.startContainer} onClick={() => setStartGame(true)}>
          {/*<button className={classes.btn}>Start</button>*/}
          <input type='text' onChange={handleKeyDown}/>
      </div> }
      </div>
  );
}

export default App;
