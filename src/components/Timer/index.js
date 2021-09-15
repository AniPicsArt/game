import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { ChangeGameState } from "../../redux/game/game-actions";
import useStyles from "./useStyles";
import classNames from 'classnames';
import { SnakePosition } from "../../redux/game/game-actions";

const Timer = () => {
    const classes = useStyles();
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(true);
    const dispatch = useDispatch();
    const { stopGame, endGame } = useSelector(state => state);

    function toggle() {
        setIsActive(!isActive);
        dispatch(ChangeGameState(!stopGame));
    }

    function reset() {
        setSeconds(0);
        setIsActive(false);
        dispatch(SnakePosition([{x:0,y:0},{x:1,y:0}]));
    }

    useEffect(() => {
        let interval = null;

        if(endGame) {
            clearInterval(interval);
            return
        }

        if (isActive) {
            interval = setInterval(() => {
                setSeconds(seconds => seconds + 1);
            }, 1000);
        } else if (!isActive && seconds !== 0) {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [isActive, seconds, endGame]);

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
