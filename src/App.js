import React, { useCallback, useState } from 'react';
import useStyles from './styles.js';
import GameField from './components/gameField/gameField.js';
import axios from "axios";

function App() {
  const classes = useStyles();
  const [startGame, setStartGame] = useState(false);

const handleKeyDown = useCallback( (event) => {
    const { target: { value }, keyCode, which } = event;

    if((keyCode === 13 || which === 13 ) && value) {
        setStartGame(true);
        axios.post('https://612e9e1ed11e5c001755865e.mockapi.io/api/v1/results', { name: value });
    }
}, [])

    return (
      <div className={classes.App}>
          {startGame ?
              <GameField/>
              : (
              <div className={classes.startContainer}>
                  <input type='text' onKeyPress={(e) => handleKeyDown(e)} />
              </div>
              )
          }
      </div>
  );
}

export default App;
