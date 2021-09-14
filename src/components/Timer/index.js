import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { changeGameState } from "../../redux/game/game-actions";
import GameField from "../gameField/gameField";
import useStyles from "./useStyles";
import classNames from 'classnames';

const Timer = () => {
    const classes = useStyles();
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(true);
    const dispatch = useDispatch();
    const stopGame = useSelector(state => state.stopGame);
    const [startGame, setStartGame] = useState(false);

    function toggle() {
        setIsActive(!isActive);
        stopGame ?
                    dispatch(changeGameState(false))
                    : dispatch(changeGameState(true));
    }

    function reset() {
        setSeconds(0);
        setIsActive(false);
    }

    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                setSeconds(seconds => seconds + 1);
            }, 1000);
        } else if (!isActive && seconds !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, seconds]);

    return (
        <div className={classes.container}>
            <div className={classes.time}>
                {seconds}s
            </div>
            <div className={classes.row}>
                <button className={classNames(classes.button, {
                [classes.buttonPrimaryActive]: isActive,
                [classes.buttonPrimaryInactive]: !isActive,
                })} onClick={toggle}>
                    {isActive ? 'Pause' : 'Start'}
                </button>
                <button className={classes.button} onClick={reset}>
                    Reset
                </button>
            </div>
            </div>
    );
};

export default Timer;
